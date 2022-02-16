import { Header } from "header"
import { render, screen } from "@testing-library/react"

describe("src/components/Header", () => {
  it("should render header", () => {
    const caption = "Dicty Community Resource"
    render(<Header links={[]} logo="" caption={caption} />)

    expect(screen.getByText(caption)).not.toBeNull()
  })

  it("should render header with links", () => {
    const caption = "My Caption"
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
        logo=""
        caption={caption}
      />,
    )

    expect(screen.getByText(caption)).not.toBeNull()
    expect(screen.getByText("Link")).not.toBeNull()
  })
})
