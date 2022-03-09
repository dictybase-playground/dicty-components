import { useRouter } from "next/router"
import { Provider, oauthLoginInput } from "@dictyBase/authentication"
import { useEffect } from "react"
import { Box, Typography } from "@material-ui/core"
import { useLoginMutation } from "dicty-graphql-schema"

export default function OauthCallbackPage() {
  const { query } = useRouter()
  const [login] = useLoginMutation()

  useEffect(() => {
    // do not proceed until provider and code are defined
    if (!query.provider || !query.code) return

    const auth = async () => {
      const provider = query.provider as Provider
      const code = query.code as string

      const input = oauthLoginInput(provider, code)
      try {
        const { data } = await login({ variables: { input } })
        console.log(data)
      } catch (err) {
        console.error("Could not process callback credentials", err)
      }
    }
    auth()
  }, [query, login])

  return (
    <Box textAlign="center">
      <Typography variant="h1">Logging in...</Typography>
    </Box>
  )
}
