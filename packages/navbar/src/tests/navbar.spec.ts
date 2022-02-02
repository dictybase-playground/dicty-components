import { test, expect } from "@playwright/test"

test("test", async ({ page }) => {
  // Go to http://localhost:3001/
  await page.goto("http://localhost:3001/")
  // Click text=Genomes
  await page.click("text=Genomes")
  // Click text=Tools
  await page.click("text=Tools")
  // Click text=Tools
  await page.click("text=Tools")
  // Click text=Research
  await page.click("text=Research")
  // Click text=Research
  await page.click("text=Research")
})
