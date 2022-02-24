import { render, screen } from "@testing-library/react"
import { GoogleButton } from "login-buttons"
import userEvent from "@testing-library/user-event"

describe("GoogleButton", () => {
  test("render button with onClickListener", () => {
    const label = "Google"
    let testVal = 1
    render(<GoogleButton handleClick={() => testVal++} text={label} />)

    expect(screen.getByText(label)).not.toBeNull()
    const button = screen.getByRole("google-button")
    userEvent.click(button)
    expect(testVal).toBe(2)
  })
})
