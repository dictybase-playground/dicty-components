import { PlaywrightTestConfig } from "@playwright/test"

const config: PlaywrightTestConfig = {
  testDir: "./e2e",
  webServer: {
    command: "yarn dev",
    port: 3002,
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
  use: {
    channel: "chrome",
  },
}

export default config
