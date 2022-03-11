import { Box } from "@material-ui/core"
import { useEffect } from "react"
import {
  CallbackProps,
  AuthActionType,
} from "@dictyBase/authentication/src/types"
import { oauthLoginInput } from "@dictyBase/authentication/src/oauthHelpers"
import { useLoginMutation, User } from "dicty-graphql-schema"
import { AuthLoading } from "@dictyBase/authentication/src/components/AuthLoading"
import { AuthError } from "@dictyBase/authentication/src/components/AuthError"
import { useAuthStore } from "@dictyBase/authentication/src/store/hooks"

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
 *
 *   return (
 *     <Callback
 *       provider={provider}
 *       code={code}
 *       callback={() => push("/")}
 *     />
 *   )
 * }
 * ```
 *
 */
export const Callback = ({ provider, code, callback }: CallbackProps) => {
  const [login, { error }] = useLoginMutation()
  const { state, dispatch } = useAuthStore()

  // hit callback if user is authenticated
  useEffect(() => {
    if (state.isAuthenticated) callback(state)
  }, [state])

  // call loginMutation and update state
  useEffect(() => {
    const auth = async () => {
      const input = oauthLoginInput(provider, code)
      const { data } = await login({ variables: { input } })

      dispatch({
        type: AuthActionType.LOGIN,
        payload: {
          provider,
          token: data?.login?.token as string,
          user: data?.login?.user as User,
        },
      })
    }
    auth()
  }, [code, provider, dispatch])

  return (
    <Box textAlign="center" mt={10} mb={10}>
      {!error ? <AuthLoading /> : <AuthError />}
    </Box>
  )
}
