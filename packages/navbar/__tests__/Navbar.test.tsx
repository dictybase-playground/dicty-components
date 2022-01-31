import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React from "react"
import { Navbar } from "../src/components/Navbar"

const navData1 = [
  {
    type: "link1",
    id: "1",
    attributes: {
      display: "Link 1",
      items: [
        {
          label: "Sublink 1",
          link: "/sublink1",
        },
      ],
    },
  },
]

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
  })
})
