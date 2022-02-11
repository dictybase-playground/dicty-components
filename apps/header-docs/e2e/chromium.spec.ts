import { chromium, test } from "@playwright/test"
import { desktopTests } from "./header.spec"

test("chromium", async ({}) => {
  const browser = await chromium.launch()
  const context = await browser.newContext({})
  const page = await context.newPage()

  await desktopTests(page)
  await browser.close()
})
