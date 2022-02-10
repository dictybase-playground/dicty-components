import { Header } from "header"
import { render, screen } from "@testing-library/react"

describe("src/components/Header", () => {
  it("should render header", () => {
    render(<Header links={[]} logo={""} />)

    expect(screen.getByText("Dicty Community Resource")).not.toBeNull()
  })
})
