import { useRouter } from "next/router"
import {
  Provider,
  oauthLoginInput,
  useAuthStore,
  AuthActionType,
} from "@dictyBase/authentication"
import { useEffect, useState } from "react"
import { Box, Typography, CircularProgress } from "@material-ui/core"
import { useLoginMutation, User } from "dicty-graphql-schema"

export default function OauthCallbackPage() {
  const { query } = useRouter()
  const [login] = useLoginMutation()
  const { state, dispatch } = useAuthStore()
  const [error, setError] = useState(false)

  useEffect(() => {
    // do not proceed until provider and code are defined
    if (!query.provider || !query.code) return

    const auth = async () => {
      const provider = query.provider as Provider
      const code = query.code as string

      const input = oauthLoginInput(provider, code)
      try {
        const { data } = await login({ variables: { input } })
        dispatch({
          type: AuthActionType.LOGIN,
          payload: {
            token: data.login.token,
            provider: provider,
            user: data.login.user as User,
          },
        })
      } catch (err) {
        setError(true)
      }
    }
    auth()
  }, [query, login, dispatch])

  return (
    <Box textAlign="center" mt={10} mb={10}>
      {state.isAuthenticated && (
        <Typography variant="h1">Logged In!</Typography>
      )}

      {!state.isAuthenticated && !error && (
        <Box>
          <CircularProgress />
          <Typography>Logging in</Typography>
        </Box>
      )}

      {error && <Typography variant="h1">Could not login</Typography>}
    </Box>
  )
}
