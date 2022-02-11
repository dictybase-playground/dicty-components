import { test, expect, Page } from "@playwright/test"
import { port } from "../package.json"

export const desktopTests = async (page: Page) => {
  await page.goto(`http://localhost:${port}`)

  const genomesOp = page.locator("text=Dicty Community Resource")
  await expect(genomesOp).toContainText("Dicty Community Resource")

  const links = ["Cite Us", "Downloads", "About dictyBase", "Login"]

  for (const linkText of links) {
    const x = page.locator(`text=${linkText}`)
    await expect(x).toContainText(linkText)
  }
}

test("chrome/edge", async ({ page }) => {
  await desktopTests(page)
})
