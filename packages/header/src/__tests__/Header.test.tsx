import { Header, HeaderLink } from "@dictyBase/header"
import { render, screen } from "@testing-library/react"

describe("src/components/Header", () => {
  it("should render header", () => {
    const caption = "Dicty Community Resource"
    render(<Header logo="" caption={caption} children={<></>} />)

    expect(screen.getByText(caption)).not.toBeNull()
  })

  it("should render header with links", () => {
    const caption = "My Caption"
    render(
      <Header logo="" caption={caption}>
        <HeaderLink url="/foo" text="Link" icon={<svg />} isNextLink />
      </Header>,
    )

    expect(screen.getByText(caption)).not.toBeNull()
    expect(screen.getByText("Link")).not.toBeNull()
  })
})
