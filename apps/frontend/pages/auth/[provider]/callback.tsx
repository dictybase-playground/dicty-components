import { useRouter } from "next/router"
import {
  Provider,
  oauthLoginInput,
  useAuthStore,
  AuthActionType,
} from "@dictyBase/authentication"
import { useEffect } from "react"
import { Box, Typography } from "@material-ui/core"
import { useLoginMutation, User } from "dicty-graphql-schema"

export default function OauthCallbackPage() {
  const { query } = useRouter()
  const [login] = useLoginMutation()
  const { dispatch } = useAuthStore()

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
        console.log("Dispatched login state")
      } catch (err) {
        console.error("Could not process callback credentials", err)
      }
    }
    auth()
  }, [query, login, dispatch])

  return (
    <Box textAlign="center">
      <Typography variant="h1">Logging in...</Typography>
    </Box>
  )
}
