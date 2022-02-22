import { Auto, IPlugin } from "@auto-it/core";
import { repository } from "./package.json";
import * as conventionalCommitsParser from "conventional-commits-parser";

export default class EmojiHook implements IPlugin {
  name = "test";

  apply(auto: Auto): void {
    console.log("Custom config is running... 🤞\n\n");

    // This will run before every command
    auto.hooks.beforeRun.tapPromise(this.name, async (config) => {
      console.log("🤯 this should run before every command");
    });

    // This will run for the command `yarn auto changelog`
    auto.hooks.beforeCommitChangelog.tap(this.name, (config) => {
      console.log("🧐");
      console.log(config.commits);
    });

    // Run when generating changelog
    auto.hooks.onCreateChangelog.tap(this.name, (changelog, { bump }) => {
      // Run for each commit line for the changelog
      changelog.hooks.renderChangelogLine.tapPromise(
        this.name,
        async (line, commit) => {
          const { subject } = conventionalCommitsParser.sync(commit.subject);

          const hash = commit.hash;
          const hashShort = hash.substring(0, 7);
          const commitUrl = `${repository}/commit/${hash}`;

          return `- ${
            subject ? subject : commit.subject
          } ([${hashShort}](${commitUrl}))`;
        }
      );
    });
  }
}
