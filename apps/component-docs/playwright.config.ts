import { PlaywrightTestConfig } from "@playwright/test"
import { port } from "./package.json"

const config: PlaywrightTestConfig = {
  testDir: "./e2e",
  webServer: {
    command: "yarn dev",
    port: parseInt(port),
    reuseExistingServer: true,
    timeout: 120 * 25000, // 5 mins
  },
}

export default config
