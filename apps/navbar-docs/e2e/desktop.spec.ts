import { test, expect } from "@playwright/test"
import { port } from "../package.json"

test("navbar e2e test for desktop", async ({ page }) => {
  await page.goto(`http://localhost:${port}`)

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

  // Click away from research
  await page.click("text=Research")
})
