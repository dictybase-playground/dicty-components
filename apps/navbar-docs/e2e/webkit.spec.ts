import { test, webkit } from "@playwright/test"
import { desktopTests } from "./navbar.spec"

test("desktop (webkit)", async ({}) => {
  const browser = await webkit.launch()
  const context = await browser.newContext({})
  const page = await context.newPage()

  await desktopTests(page)
  await browser.close()
})
