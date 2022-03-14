import { PlaywrightTestConfig } from "@playwright/test"
import { port } from "./package.json"

const config: PlaywrightTestConfig = {
  testDir: "./e2e",
  webServer: {
    command: "yarn demo:dev",
    port: parseInt(port),
    reuseExistingServer: true,
    timeout: 120000, // 2 mins
  },
}

export default config
