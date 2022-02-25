import { Footer, footerData, FooterLink } from "@dictyBase/footer"

export default function FooterPage() {
  return (
    <Footer title="Dicty Community Resource">
      {footerData.map(({ label, url }, i) => (
        <FooterLink label={label} url={url} key={i} />
      ))}
    </Footer>
  )
}
