import { createTheme, MuiThemeProvider, CssBaseline } from "@material-ui/core"
import { AppProps } from "next/app"
import Head from "next/head"
import ClientOnly from "../components/clientOnly"
import { Header, HeaderLink, HeaderLinkProps } from "@dictyBase/header"
import logo from "../public/logo.png"
import AddIcon from "@material-ui/icons/Add"
import FileDownloadIcon from "@material-ui/icons/GetApp"
import InfoIcon from "@material-ui/icons/Info"
import LoginIcon from "@mui/icons-material/Login"
import { Navbar, navbarData } from "@dictyBase/navbar"
import { Footer, FooterLink, footerData } from "@dictyBase/footer"

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#004080",
      light: "#476ab0",
      dark: "#001b53",
      contrastText: "#fff",
    },
    secondary: {
      main: "#008080",
      light: "#4cb0af",
      dark: "#005354",
    },
    error: {
      main: "#b2102f",
      light: "#ea4f58",
      dark: "#7b0008",
    },
  },
  typography: {
    button: {
      textTransform: "none",
    },
    h1: {
      fontSize: "2.00em",
    },
    h2: {
      fontSize: "1.50em",
    },
    h3: {
      fontSize: "1.17em",
    },
    h4: {
      fontSize: "1.00em",
    },
    h5: {
      fontSize: "0.83em",
    },
    h6: {
      fontSize: "0.67em",
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        a: {
          textDecoration: "none",
          color: "#004080",
          "&:hover": {
            color: "#001b53",
          },
        },
      },
    },
  },
})

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

export default function ComponentDocsApp({ Component, pageProps }: AppProps) {
  return (
    <ClientOnly>
      <MuiThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Head>
          <link rel="shortcut icon" href="favicon.ico" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <meta name="theme-color" content="#000000" />

          <link rel="manifest" href="manifest.json" />

          <title>dictyBase</title>
        </Head>
        <Header logo={logo.src} caption="Dicty Community Resource">
          {headerItems.map((item, i) => (
            <HeaderLink key={i} {...item} />
          ))}
        </Header>
        <Navbar
          dataUrl="https://raw.githubusercontent.com/dictyBase/migration-data/master/navbar/navbar.json"
          initialData={navbarData}
        />
        <Component {...pageProps} />
        <Footer title="Dicty Community Resource">
          {footerData.map(({ label, url }, i) => (
            <FooterLink label={label} url={url} key={i} />
          ))}
        </Footer>
      </MuiThemeProvider>
    </ClientOnly>
  )
}
