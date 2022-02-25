import { PlaywrightTestConfig } from "@playwright/test"
import config from "./playwright.config"

const firefoxConfig: PlaywrightTestConfig = {
  ...config,
  use: { browserName: "webkit" },
}

export default firefoxConfig
