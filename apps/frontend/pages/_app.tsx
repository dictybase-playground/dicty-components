import { AppProps } from "next/app"
import dynamic from "next/dynamic"
import { useEffect } from "react"
import { CssBaseline, ThemeProvider } from "@material-ui/core"
import { dictyTheme } from "../styles/theme"
import { DictyHead } from "../components/DictyHead"
import { footerData } from "../data/footerData"
import { Navbar, navbarData } from "@dictyBase/navbar"
import { Footer, FooterProps } from "@dictyBase/footer"
import { Header } from "@dictyBase/header"
import logo from "../public/logo.png"

const footerDataWithTitle: FooterProps = {
  title: "Dicty Community Resource",
  items: footerData,
}

function DictyBaseApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // start msw only if on development
    if (process.env.NEXT_PUBLIC_DEPLOY_ENV === "development") {
      if (typeof window === "undefined") {
        const { server } = require("../mocks/server")
        server.listen()
      } else {
        const { worker } = require("../mocks/browser")
        worker.start()
      }
    }
  }, [])
  return (
        <ThemeProvider theme={dictyTheme}>
          <CssBaseline />
          <DictyHead />
	{/*  <Header logo={logo.src} caption="Dicty Community Resource">
          </Header>
	  */}
          <Navbar
            dataUrl="https://raw.githubusercontent.com/dictyBase/migration-data/master/navbar/navbar.json"
            initialData={navbarData}
          />
          <Component {...pageProps} />
          <Footer footerData={footerDataWithTitle} />
        </ThemeProvider>
  )
}

export default dynamic(() => Promise.resolve(DictyBaseApp), {
  ssr: false,
})
