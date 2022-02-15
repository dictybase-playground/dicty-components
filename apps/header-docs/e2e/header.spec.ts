import { test, expect } from "@playwright/test"
import { port } from "../package.json"

export const url = `http://localhost:${port}`

test("header browser e2e test", async ({ page }) => {
  await page.goto(url)

  const genomesOp = page.locator("text=Dicty Community Resource")
  await expect(genomesOp).toContainText("Dicty Community Resource")

  const links = ["Cite Us", "Downloads", "About dictyBase", "Login"]

  for (const linkText of links) {
    const x = page.locator(`text=${linkText}`)
    await expect(x).toContainText(linkText)
  }
})
