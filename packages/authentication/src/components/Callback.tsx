import { Box } from "@material-ui/core"
import { useState, useEffect } from "react"
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
 *
 *   return (
 *     <Callback
 *       provider={query.provider as Provider}
 *       code={query.code as string}
 *       callback={() => push("/")}
 *     />
 *   )
 * }
 * ```
 *
 */
export const Callback = ({ provider, code, callback }: CallbackProps) => {
  const [login] = useLoginMutation()
  const { state, dispatch } = useAuthStore()
  const [error, setError] = useState(false)

  useEffect(() => {
    if (state.isAuthenticated) {
      callback(state)
      return
    }
  }, [state])

  useEffect(() => {
    if (!provider || !code) {
      setError(true)
      return
    }

    const auth = async () => {
      const input = oauthLoginInput(provider, code)
      try {
        const { data } = await login({ variables: { input } })

        const token = data?.login?.token as string
        const user = data?.login?.user as User
        dispatch({
          type: AuthActionType.LOGIN,
          payload: {
            token,
            provider,
            user,
          },
        })
      } catch (err) {
        setError(true)
      }
    }
    auth()
  }, [code, provider, dispatch])

  return (
    <Box textAlign="center" mt={10} mb={10}>
      {!error && <AuthLoading />}
      {error && <AuthError />}
    </Box>
  )
}
