import { render, screen } from "@testing-library/react"
import React from "react"
import { Navbar } from "../src/components/Navbar"

describe("src/components/Navbar", () => {
  it("should render navbar with 1 link, and 1 sublink", () => {
    render(
      <Navbar
        items={[
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
        ]}
      />,
    )
    expect(screen.getByText("Link 1")).toBeInTheDocument()
    expect(screen.getByText("Sublink 1")).toBeInTheDocument()
  })
})
