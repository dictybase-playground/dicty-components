import { MuiThemeProvider, CssBaseline } from "@material-ui/core"
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
import { dictyStyles } from "../styles/defaultStyles"
import { headerLoginData } from "../data/headerData"

export default function ComponentDocsApp({ Component, pageProps }: AppProps) {
  return (
    <ClientOnly>
      <MuiThemeProvider theme={dictyStyles}>
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
