import { test, expect } from "@playwright/test"
import { port } from "../package.json"

test("header browser e2e test", async ({ browser }) => {
  const page = await browser.newPage()
  await page.goto(`http://localhost:${port}`)

  const genomesOp = page.locator("text=Dicty Community Resource")
  await expect(genomesOp).toContainText("Dicty Community Resource")

  const links = ["Cite Us", "Downloads", "About dictyBase", "Login"]

  for (const linkText of links) {
    const x = page.locator(`text=${linkText}`)
    await expect(x).toContainText(linkText)
  }

  browser.close()
})
