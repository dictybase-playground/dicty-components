import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Navbar } from "navbar"
import { navData1 } from "navbar/src/data/testData"

describe("src/components/Navbar", () => {
  it("should render desktop navbar with 1 link, and 1 sublink", () => {
    render(<Navbar items={navData1} />)

    const item1 = navData1[0].attributes
    const link1 = screen.getByText(item1.display)
    expect(link1).not.toBeNull()

    // Click on link 1 to open up dropdown with sub link 1
    userEvent.click(link1)
    expect(screen.getByText(item1.items[0].label)).not.toBeNull()
  })

  it("should render mobile navbar with 1 link, and 1 sublink", () => {
    render(<Navbar items={navData1} isMobile />)

    const menuButton = screen.getByRole("mobile-nav-button")
    expect(menuButton).not.toBeNull()
    // Click hamburger menu button to open menu
    userEvent.click(menuButton)

    const item1 = navData1[0].attributes
    const link1 = screen.getByText(item1.display)
    expect(link1).not.toBeNull()

    // Click on link 1 to open up dropdown with sub link 1
    userEvent.click(link1)
    expect(screen.getByText(item1.items[0].label)).not.toBeNull()
  })
})
