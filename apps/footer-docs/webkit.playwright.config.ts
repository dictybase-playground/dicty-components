import { PlaywrightTestConfig } from "@playwright/test"
import config from "./playwright.config"

const webkitConfig: PlaywrightTestConfig = {
  ...config,
  use: { browserName: "webkit" },
}

export default webkitConfig
