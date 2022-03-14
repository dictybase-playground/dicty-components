import { useRouter } from "next/router"
import { Provider, Callback, useAuthStore } from "@dictyBase/authentication"
import { useEffect } from "react"

export default function OauthCallbackPage() {
  const { query, push } = useRouter()
  const provider = query.provider as Provider
  const code = query.code as string
  const { state } = useAuthStore()

  useEffect(() => {
    if (state.isAuthenticated) push("/")
  }, [state, push])

  return <Callback provider={provider} code={code} />
}
