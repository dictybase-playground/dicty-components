import { HeaderLinkProps } from "header/src/types"
import AddIcon from "@material-ui/icons/Add"
import FileDownloadIcon from "@material-ui/icons/GetApp"
import InfoIcon from "@material-ui/icons/Info"
import LoginIcon from "@mui/icons-material/Login"
import LogoutIcon from "@mui/icons-material/Logout"

export const headerDataLogin: Array<HeaderLinkProps> = [
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

export const headerDataLogout: Array<HeaderLinkProps> = [
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
    url: "/logout",
    icon: <LogoutIcon fontSize="large" />,
    text: "Logout",
    isNextLink: true,
  },
]
