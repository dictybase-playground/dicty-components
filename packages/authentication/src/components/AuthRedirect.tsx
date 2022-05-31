import { useEffect } from "react"
import { useAuthStore } from "../store/context"
import {
  AuthRedirectProps,
  AuthActionType,
} from "../types"
import { User } from "dicty-graphql-schema"
import { Box, CircularProgress, Typography } from "@material-ui/core"

/**
 * Given a provider and a `LoginMutation` data,
 * update auth state and render redirect ui.
 */
export const AuthRedirect = ({ provider, data }: AuthRedirectProps) => {
  const { dispatch } = useAuthStore()

  useEffect(() => {
    dispatch({
      type: AuthActionType.LOGIN,
      payload: {
        provider,
        token: data.login?.token as string,
        user: data.login?.user as User,
      },
    })
  }, [dispatch])

  return (
    <Box>
      <CircularProgress />
      <Typography>Redirecting</Typography>
    </Box>
  )
}
