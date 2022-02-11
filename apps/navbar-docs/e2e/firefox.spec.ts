import { test, firefox } from "@playwright/test"
import { desktopTests } from "./navbar.spec"

test("desktop (firefox)", async ({}) => {
  const browser = await firefox.launch()
  const context = await browser.newContext({})
  const page = await context.newPage()

  await desktopTests(page)
  await browser.close()
})
