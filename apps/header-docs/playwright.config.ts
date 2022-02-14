import { PlaywrightTestConfig } from "@playwright/test"
import { port } from "./package.json"

const config: PlaywrightTestConfig = {
  testDir: "./e2e",
  webServer: {
    command: "yarn dev",
    port: parseInt(port),
    reuseExistingServer: true,
  },
}

export default config
