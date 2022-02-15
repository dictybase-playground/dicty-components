import { test, expect } from "@playwright/test"
import { port } from "../package.json"

export const url = `http://localhost:${port}/footer`

test("footer e2e test", async ({ page }) => {
  await page.goto(url)

  const header = page.locator("text=Dicty Community Resource")
  await expect(header).toContainText("Dicty Community Resource")

  const supportMsg = "Supported by NIH/NIGMS"
  const support = page.locator(`text=${supportMsg}`)
  await expect(support).toContainText(supportMsg)
})
