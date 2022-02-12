import { Header } from "header"
import logo from "header/src/images/logo.png"
import AddIcon from "@material-ui/icons/Add"
import FileDownloadIcon from "@material-ui/icons/GetApp"
import InfoIcon from "@material-ui/icons/Info"
import LoginIcon from "@mui/icons-material/Login"

export default function Docs() {
  return (
    <div>
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
    </div>
  )
}
