import { Auto, IPlugin } from "@auto-it/core";
import { repository } from "./package.json";
import * as conventionalCommitsParser from "conventional-commits-parser";

export default class CustomAutoPlugin implements IPlugin {
  name = "yarn-workspace";

  apply(auto: Auto): void {
    console.log("Custom config is running... 🤞\n");

    // This will run before every command
    auto.hooks.beforeRun.tapPromise(this.name, async (_) => {
      if ((await this.getCurrentBranchName()) !== "master") {
        auto.logger.log.error("Can only release on main or master branch");
        throw new Error(
          "please make sure to run any releases on the master branch"
        );
      }
    });

    auto.hooks.onCreateLogParse.tap(this.name, (changelog) => {
      // ignore all merge and dependabot commits
      changelog.hooks.omitCommit.tap("test", (commit) => {
        const { subject } = conventionalCommitsParser.sync(commit.subject);
        if (!subject) {
          return true;
        }
      });
    });

    // Run when generating changelog
    auto.hooks.onCreateChangelog.tap(this.name, (changelog, _) => {
      // Run for each commit line for the changelog
      changelog.hooks.renderChangelogLine.tapPromise(
        this.name,
        async (_, commit) => {
          const { subject } = conventionalCommitsParser.sync(commit.subject);

          const hash = commit.hash;
          const hashShort = hash.substring(0, 7);
          const commitUrl = `${repository}/commit/${hash}`;
          return `- ${subject} ([${hashShort}](${commitUrl}))`;
        }
      );
    });
  }

  // Source: https://stackoverflow.com/a/68764462/5834961
  private getCurrentBranchName() {
    return new Promise((resolve, reject) => {
      const { exec } = require("child_process");
      const command = "git rev-parse --abbrev-ref HEAD";

      return exec(command, (err: any, stdout: string) => {
        if (err) reject(`could not get current branch name. ${err}`);
        else if (typeof stdout === "string") resolve(stdout.trim());
      });
    });
  }
}
