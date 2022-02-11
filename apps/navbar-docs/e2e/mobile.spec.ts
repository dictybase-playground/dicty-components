import { test, expect } from "@playwright/test"
import { port } from "../package.json"

test("mobile screen", async ({ page }) => {
  // Screen width for iPhone 11 Pro
  page.setViewportSize({ width: 375, height: 812 })

  // navigate to page
  await page.goto(`http://localhost:${port}`)

  await page.locator("id=mobile-nav-button").click()

  // Click text=Genomes
  await page.click("text=Genomes")
  const genomesOp = page.locator("text=Dictyostelium discoideum AX4")
  await expect(genomesOp).toContainText("Dictyostelium discoideum AX4")

  // Click text=Tools
  await page.click("text=Tools")
  const toolsOp = page.locator("text=DictyAccess")
  await expect(toolsOp).toContainText("DictyAccess")

  // Click text=Research
  await page.click("text=Research")
  const researchOp = page.locator("text=Anatomy Ontology")
  await expect(researchOp).toContainText("Anatomy Ontology")
})
