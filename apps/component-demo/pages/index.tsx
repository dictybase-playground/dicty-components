import HeaderPage from "./header"
import NavbarPage from "./navbar"
import FooterPage from "./footer"
import LoginButtonsPage from "./login-buttons"

export default function Docs() {
  return (
    <>
      <HeaderPage />
      <NavbarPage />

      <div style={{ margin: "10vh 0" }}>
        <LoginButtonsPage />
      </div>

      <FooterPage />
    </>
  )
}
