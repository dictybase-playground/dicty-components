import { test } from "@playwright/test"
import { desktopTests } from "./header.spec"

test("chrome/edge", async ({ page }) => {
  await desktopTests(page)
})
