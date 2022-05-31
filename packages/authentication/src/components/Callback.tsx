import { Box } from "@material-ui/core"
import { useEffect } from "react"
import { CallbackProps } from "../types"
import { oauthLoginInput } from "../oauthHelpers"
import { useLoginMutation } from "dicty-graphql-schema"
import { AuthLoading } from "./AuthLoading"
import { AuthError } from "./AuthError"
import { AuthRedirect } from "./AuthRedirect"

/**
 * OAuth callback component. Verifies and dispatches the user login state.
 *
 * *Note: This component assumes `<AuthProvider />` is in use*
 *
 * ### Usage
 * ```tsx
 * import { useRouter } from "next/router"
 * import { Provider, Callback } from "@dictyBase/authentication"
 *
 * export default function OauthCallbackPage() {
 *   const { query, push } = useRouter()
 *   const provider = query.provider as Provider
 *   const code = query.code as string
 *   const { state } = useAuthStore()
 *
 *   useEffect(() => {
 *    if (state.isAuthenticated) push("/")
 *   }, [state, push])
 *
 *   return <Callback provider={provider} code={code} />
 * }
 * ```
 *
 */
export const Callback = ({ provider, code }: CallbackProps) => {
  const input = oauthLoginInput(provider, code)
  const [login, { error, loading, data }] = useLoginMutation({
    variables: { input },
  })

  // call loginMutation which will result in
  // 1. loading to be false
  // 2. if mutation succeeded, set data and render data component
  // 3. if mutation failed, set error to true and render error component
  useEffect(() => {
    const auth = async () => {
      await login()
    }
    auth()
  }, [login])

  return (
    <Box textAlign="center" mt={10} mb={10}>
      {error && <AuthError />}
      {loading && <AuthLoading />}
      {data && <AuthRedirect data={data} provider={provider} />}
    </Box>
  )
}
