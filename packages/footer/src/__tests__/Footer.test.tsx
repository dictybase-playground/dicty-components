import { render, screen } from "@testing-library/react"
import {
  FooterProps,
  headerPipeline,
  listPipeline,
  sponsorsPipeline,
  Footer,
  FooterListItemProps,
} from "../components/Footer"
import { footerData } from "../testdata/footerData"
import "@testing-library/jest-dom"

const title = "Dicty palooza"
const footerDataWithTitles: FooterProps = {
  title: title,
  items: footerData,
}

describe("functional footer", () => {
  test("should render the header", () => {
    render(headerPipeline(footerDataWithTitles)(1))
    expect(screen.getByText(title)).not.toBeNull()
  })

  test("should render the list of url", () => {
    render(listPipeline(footerDataWithTitles)(3))
    const labelTest = ({ label }: FooterListItemProps) =>
      expect(screen.getByRole("link", { name: label, exact: false }))
        .toBeInTheDocument
    footerData.map(labelTest)
    expect(screen.getAllByRole("link")).toHaveLength(footerData.length)
  })

  test("should render the sponsors", () => {
    render(sponsorsPipeline(8))
    expect(screen.getAllByRole("link")).toHaveLength(2)
    Array.of(
      ["NIH", "https://reporter.nih.gov/project-details/10024726"],
      ["NIGMS", "https://www.nigms.nih.gov/"],
    ).map(([text, url]) =>
      expect(
        screen.getByRole("link", { name: text, exact: false }),
      ).toHaveAttribute("href", url),
    )
    expect(screen.getByText(/Supported/)).toBeDefined()
  })

  test("should render the container", () => {
    render(<Footer footerData={footerDataWithTitles} />)
    expect(screen.getByText(title)).toBeDefined()
    expect(screen.getAllByRole("link")).toHaveLength(footerData.length + 2)
    expect(screen.getByText(/Supported/)).toBeDefined()
    footerData.map(({ url, label }) =>
      expect(
        screen.getByRole("link", { name: label, exact: false }),
      ).toHaveAttribute("href", url),
    )
    Array.of(
      ["NIH", "https://reporter.nih.gov/project-details/10024726"],
      ["NIGMS", "https://www.nigms.nih.gov/"],
    ).map(([text, url]) =>
      expect(
        screen.getByRole("link", { name: text, exact: false }),
      ).toHaveAttribute("href", url),
    )
  })
})
