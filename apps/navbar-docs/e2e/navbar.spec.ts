import { test, expect, Page, chromium, webkit, firefox } from "@playwright/test"

const url = "http://localhost:3001"

test.describe.parallel("navbar", () => {
  test("desktop (chromium)", async ({}) => {
    const browser = await chromium.launch()
    const context = await browser.newContext({})
    const page = await context.newPage()

    await desktopTests(page)
    await browser.close()
  })

  test("desktop (webkit)", async ({}) => {
    const browser = await webkit.launch()
    const context = await browser.newContext({})
    const page = await context.newPage()

    await desktopTests(page)
    await browser.close()
  })

  test("desktop (firefox)", async ({}) => {
    const browser = await firefox.launch()
    const context = await browser.newContext({})
    const page = await context.newPage()

    await desktopTests(page)
    await browser.close()
  })

  const desktopTests = async (page: Page) => {
    await page.goto(url)

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
    // expect(page.locator("text=Anatomy Ontology")).toBeNull()
  }

  test("mobile screen", async ({ page }) => {
    // Screen width for iPhone 11 Pro
    page.setViewportSize({ width: 375, height: 812 })

    // navigate to page
    await page.goto(url)

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
})
