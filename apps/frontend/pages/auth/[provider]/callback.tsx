import { useRouter } from "next/router"
import { Provider, useAuthStore, Callback } from "@dictyBase/authentication"

export default function OauthCallbackPage() {
  const { query, push } = useRouter()
  const { state, dispatch } = useAuthStore()

  return (
    <Callback
      provider={query.provider as Provider}
      code={query.code as string}
      state={state}
      dispatch={dispatch}
      callback={() => push("/")}
    />
  )
}
