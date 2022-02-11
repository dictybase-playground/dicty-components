import { Header } from "header"
import { render, screen } from "@testing-library/react"

describe("src/components/Header", () => {
  it("should render header", () => {
    render(<Header links={[]} logo={""} />)

    expect(screen.getByText("Dicty Community Resource")).not.toBeNull()
  })

  it("should render header with links", () => {
    render(
      <Header
        links={[
          {
            url: "/foo",
            text: "Link",
            icon: <svg />,
            isNextLink: false,
          },
        ]}
        logo={""}
      />,
    )

    expect(screen.getByText("Dicty Community Resource")).not.toBeNull()
    expect(screen.getByText("Link")).not.toBeNull()
  })
})
