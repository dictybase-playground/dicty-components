import { Header, headerDataLogin, HeaderLink } from "header"
import { Navbar, navbarData } from "navbar"
import logo from "header/src/images/logo.png"
import { Footer, footerData, FooterLink } from "footer"

export default function Docs() {
  return (
    <>
      <div style={{ marginBottom: "20vh" }}>
        <Header logo={logo.src} caption="Dicty Community Resource">
          {headerDataLogin.map((item, i) => (
            <HeaderLink {...item} key={i} />
          ))}
        </Header>
        <Navbar
          dataUrl="https://raw.githubusercontent.com/dictyBase/migration-data/master/navbar/navbar.json"
          initialData={navbarData}
        />
      </div>

      <Footer title="Dicty Community Resource">
        {footerData.map(({ label, url }, i) => (
          <FooterLink label={label} url={url} key={i} />
        ))}
      </Footer>
    </>
  )
}
