import { Header, HeaderLinkProps, HeaderLink } from "header"
import { Navbar, navbarData } from "navbar"
import logo from "header/src/images/logo.png"
import AddIcon from "@material-ui/icons/Add"
import FileDownloadIcon from "@material-ui/icons/GetApp"
import InfoIcon from "@material-ui/icons/Info"
import LoginIcon from "@mui/icons-material/Login"
import { Footer, footerData, FooterLink } from "footer"
import HeaderPage from "./header"
import NavbarPage from "./navbar"
import FooterPage from "./footer"
import LoginButtonsPage from "./login-buttons"

const headerItems: Array<HeaderLinkProps> = [
  {
    url: "/community/citation",
    icon: <AddIcon fontSize="large" />,
    text: "Cite Us",
    isNextLink: true,
  },
  {
    url: "/downloads",
    icon: <FileDownloadIcon fontSize="large" />,
    text: "Downloads",
    isNextLink: true,
  },
  {
    url: "/about",
    icon: <InfoIcon fontSize="large" />,
    text: "About dictyBase",
    isNextLink: true,
  },
  {
    url: "/login",
    icon: <LoginIcon fontSize="large" />,
    text: "Login",
    isNextLink: true,
  },
]

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
