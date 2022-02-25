import { test, expect } from "@playwright/test"
import { port } from "../package.json"

export const url = `http://localhost:${port}/login-buttons`

test("login buttons e2e test", async ({ page }) => {
  await page.goto(url)

  const orcidButton = page.locator("text=Sign in with ORCID")
  await expect(orcidButton).toContainText("Sign in with ORCID")

  const googleButton = page.locator("text=Sign in with Google")
  await expect(googleButton).toContainText("Sign in with Google")

  const linkedInButton = page.locator("text=Sign in with LinkedIn")
  await expect(linkedInButton).toContainText("Sign in with LinkedIn")
})
