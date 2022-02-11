import { test, firefox } from "@playwright/test"
import { desktopTests } from "./header.spec"

test("firefox", async ({}) => {
  const browser = await firefox.launch()
  const context = await browser.newContext({})
  const page = await context.newPage()

  await desktopTests(page)
  await browser.close()
})
