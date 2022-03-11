import { useRouter } from "next/router"
import { Provider, Callback } from "@dictyBase/authentication"

export default function OauthCallbackPage() {
  const { query, push } = useRouter()
  const provider = query.provider as Provider
  const code = query.code as string

  return (
    <Callback provider={provider} code={code} callback={(_) => push("/")} />
  )
}
