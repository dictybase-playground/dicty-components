import { HeaderLinkProps } from "@dictyBase/header"
import AddIcon from "@material-ui/icons/Add"
import FileDownloadIcon from "@material-ui/icons/GetApp"
import InfoIcon from "@material-ui/icons/Info"
import { Logout } from "@mui/icons-material"
import LoginIcon from "@mui/icons-material/Login"

export const headerLoginData: Array<HeaderLinkProps> = [
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
    text: "About",
    isNextLink: true,
  },
  {
    url: "/auth/login",
    icon: <LoginIcon fontSize="large" />,
    text: "Login",
    isNextLink: true,
  },
]

export const headerLogoutData: Array<HeaderLinkProps> = [
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
    text: "About",
    isNextLink: true,
  },
  {
    url: "/auth/logout",
    icon: <Logout fontSize="large" />,
    text: "Logout",
    isNextLink: true,
  },
]
