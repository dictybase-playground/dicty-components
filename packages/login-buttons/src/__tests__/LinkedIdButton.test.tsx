import { render, screen } from "@testing-library/react"
import { LinkedInButton } from "login-buttons"
import userEvent from "@testing-library/user-event"

describe("LinkedInButton", () => {
  test("render button with onClickListener", () => {
    const label = "LinkedIn"
    let testVal = 1
    render(<LinkedInButton handleClick={() => testVal++} text={label} />)

    expect(screen.getByText(label)).not.toBeNull()
    const button = screen.getByRole("linkedin-button")
    userEvent.click(button)
    expect(testVal).toBe(2)
  })
})
