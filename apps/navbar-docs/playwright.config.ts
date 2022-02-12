import { PlaywrightTestConfig } from "@playwright/test"
import { port } from "./package.json"

const config: PlaywrightTestConfig = {
  testDir: "./e2e",
  webServer: {
    command: "yarn dev",
    port: parseInt(port),
    timeout: 120 * 1000,
    reuseExistingServer: !process.env.CI,
  },
}

export default config
