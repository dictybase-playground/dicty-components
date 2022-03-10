import { useRouter } from "next/router"
import { Provider, Callback } from "@dictyBase/authentication"

export default function OauthCallbackPage() {
  const { query, push } = useRouter()

  return (
    <Callback
      provider={query.provider as Provider}
      code={query.code as string}
      callback={(_) => push("/")}
    />
  )
}
