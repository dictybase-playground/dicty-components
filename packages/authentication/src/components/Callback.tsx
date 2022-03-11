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
  const input = oauthLoginInput(provider, code)
  const [loginMutation, { data, error }] = useLoginMutation({
    variables: { input },
  })
  const { state, dispatch } = useAuthStore()

  // hit callback if user is authenticated
  useEffect(() => {
    if (state.isAuthenticated) callback(state)
  }, [state])

  // call loginMutation and update state
  useEffect(() => {
    const auth = async () => {
      await loginMutation()
      if (data) {
        dispatch({
          type: AuthActionType.LOGIN,
          payload: {
            provider,
            token: data.login?.token as string,
            user: data.login?.user as User,
          },
        })
      }
    }
    auth()
  }, [loginMutation, dispatch, data])

  return (
    <Box textAlign="center" mt={10} mb={10}>
      {!error ? <AuthLoading /> : <AuthError />}
    </Box>
  )
}
