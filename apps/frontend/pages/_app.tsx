import { CssBaseline, Container } from "@material-ui/core"
import { AppProps } from "next/app"
import Head from "next/head"
import { Header, HeaderLink } from "@dictyBase/header"
import logo from "../public/logo.png"
import { Navbar, navbarData } from "@dictyBase/navbar"
import { Footer, FooterLink, footerData } from "@dictyBase/footer"
import { headerLoginData } from "../data/headerData"
import { AppProvider } from "@dictyBase/provider"
import { AuthProvider } from "@dictyBase/authentication"
import { useEffect } from "react"

export default function ComponentDocsApp({ Component, pageProps }: AppProps) {
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
    <AuthProvider>
      <AppProvider
        server={process.env.NEXT_PUBLIC_GRAPHQL_SERVER}
        altServer={process.env.NEXT_PUBLIC_ALT_GRAPHQL_SERVER}
        deployEnv={process.env.NEXT_PUBLIC_DEPLOY_ENV}>
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
          {headerLoginData.map((item, i) => (
            <HeaderLink key={i} {...item} />
          ))}
        </Header>
        <Navbar
          dataUrl="https://raw.githubusercontent.com/dictyBase/migration-data/master/navbar/navbar.json"
          initialData={navbarData}
        />

        {/* render pages here */}
        <Container maxWidth="lg">
          <br />
          <Component {...pageProps} />
          <br />
        </Container>

        <Footer title="Dicty Community Resource">
          {footerData.map(({ label, url }, i) => (
            <FooterLink label={label} url={url} key={i} />
          ))}
        </Footer>
      </AppProvider>
    </AuthProvider>
  )
}
