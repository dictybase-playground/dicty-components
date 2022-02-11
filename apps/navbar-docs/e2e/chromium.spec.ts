import { test, chromium } from "@playwright/test"
import { desktopTests } from "./navbar.spec"

test("desktop (chromium)", async ({}) => {
  const browser = await chromium.launch()
  const context = await browser.newContext({})
  const page = await context.newPage()

  await desktopTests(page)
  await browser.close()
})
