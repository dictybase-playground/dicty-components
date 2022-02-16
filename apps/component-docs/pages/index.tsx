import { Header } from "header"
import { Navbar, navbarData } from "navbar"
import logo from "header/src/images/logo.png"
import AddIcon from "@material-ui/icons/Add"
import FileDownloadIcon from "@material-ui/icons/GetApp"
import InfoIcon from "@material-ui/icons/Info"
import LoginIcon from "@mui/icons-material/Login"
import { Footer, footerData, FooterLink } from "footer"

export default function Docs() {
  return (
    <>
      <div style={{ marginBottom: "20vh" }}>
        <Header
          logo={logo.src}
          links={[
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
          ]}
        />
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
