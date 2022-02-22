import { Auto, IPlugin, InteractiveInit } from "@auto-it/core";

export default class EmojiHook implements IPlugin {
  name = "test";

  apply(auto: Auto): void {
    console.log("Custom config is running... 🤞\n\n");

    // This will run before every command
    auto.hooks.beforeRun.tapPromise(this.name, async (config) => {
      console.log("🤯");
    });
  }
}
