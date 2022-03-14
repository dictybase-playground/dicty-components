import { AppProps } from "next/app"
import { AppProvider } from "@dictyBase/provider"
import { AuthProvider } from "@dictyBase/authentication"
import { useEffect } from "react"
import AppSetup from "./AppSetup"

export default function ComponentDocsApp(props: AppProps) {
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
      <AppProvider deployEnv={process.env.NEXT_PUBLIC_DEPLOY_ENV}>
        <AppSetup {...props} />
      </AppProvider>
    </AuthProvider>
  )
}
