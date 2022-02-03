import { test, expect } from "@playwright/test"

// Screen width for iPhone 11 Pro
test.use({ viewport: { width: 375, height: 812 } })

test("src/components/Navbar (Mobile)", async ({ page }) => {
  // Go to http://localhost:3001/navbar
  await page.goto("http://localhost:3001/navbar")

  await page.locator("id=mobile-nav-button").click()

  // Click text=Genomes
  await page.click("text=Genomes")
  const genomesOp = page.locator("text=Dictyostelium discoideum AX4")
  expect(genomesOp).toContainText("Dictyostelium discoideum AX4")

  // Click text=Tools
  await page.click("text=Tools")
  const toolsOp = page.locator("text=DictyAccess")
  expect(toolsOp).toContainText("DictyAccess")

  // Click text=Research
  await page.click("text=Research")
  const researchOp = page.locator("text=Anatomy Ontology")
  expect(researchOp).toContainText("Anatomy Ontology")

  // Click away from research
  await page.click("text=Research")
  // expect(page.locator("text=Anatomy Ontology")).toBeNull()
})
