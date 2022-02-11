import { test, expect, Page, chromium, webkit, firefox } from "@playwright/test"

const url = "http://localhost:3002"

test.describe.parallel("header", () => {
  test("chromium", async ({}) => {
    const browser = await chromium.launch()
    const context = await browser.newContext({})
    const page = await context.newPage()

    await desktopTests(page)
    await browser.close()
  })

  test("webkit", async ({}) => {
    const browser = await webkit.launch()
    const context = await browser.newContext({})
    const page = await context.newPage()

    await desktopTests(page)
    await browser.close()
  })

  test("firefox", async ({}) => {
    const browser = await firefox.launch()
    const context = await browser.newContext({})
    const page = await context.newPage()

    await desktopTests(page)
    await browser.close()
  })

  test("chrome/edge", async ({ page }) => {
    await desktopTests(page)
  })

  const desktopTests = async (page: Page) => {
    await page.goto(url)

    const genomesOp = page.locator("text=Dicty Community Resource")
    await expect(genomesOp).toContainText("Dicty Community Resource")

    const links = ["Cite Us", "Downloads", "About dictyBase", "Login"]

    for (const linkText of links) {
      const x = page.locator(`text=${linkText}`)
      await expect(x).toContainText(linkText)
    }
  }
})
