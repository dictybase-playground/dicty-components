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

/**
 * OAuth callback component. Verifies and dispatches the user login state
 *
 * ### Usage
 * ```tsx
 * import { useRouter } from "next/router"
 * import { Provider, useAuthStore, Callback } from "@dictyBase/authentication"
 *
 * export default function OauthCallbackPage() {
 *   const { query, push } = useRouter()
 *   const { state, dispatch } = useAuthStore()
 *
 *   return (
 *     <Callback
 *       provider={query.provider as Provider}
 *       code={query.code as string}
 *       state={state}
 *       dispatch={dispatch}
 *       callback={() => push("/")}
 *     />
 *   )
 * }
 * ```
 *
 */
export const Callback = ({
  state,
  dispatch,
  provider,
  code,
  callback,
}: CallbackProps) => {
  const [login] = useLoginMutation()
  const [error, setError] = useState(false)

  useEffect(() => {
    if (state.isAuthenticated) {
      callback()
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
