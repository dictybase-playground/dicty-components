import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { OrcidButton } from "../components/OrcidButton"

describe("OrcidButton", () => {
  test("render button with onClickListener", () => {
    const label = "Orcid"
    let testVal = 1
    render(<OrcidButton handleClick={() => testVal++} text={label} />)

    expect(screen.getByText(label)).not.toBeNull()
    const button = screen.getByRole("orcid-button")
    userEvent.click(button)
    expect(testVal).toBe(2)
  })
})
