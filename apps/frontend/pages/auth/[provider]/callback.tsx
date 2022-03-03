import { useRouter } from "next/router"
import { Provider, oauthLoginInput } from "@dictyBase/authentication"
import { useEffect } from "react"
import { Box, Typography } from "@material-ui/core"

export default function OauthCallbackPage() {
  const { query, asPath } = useRouter()

  useEffect(() => {
    // do not proceed until provider and code are defined
    if (!query.provider || !query.code) return

    const provider = query.provider as Provider
    const code = query.code as string

    // asPath returns the the entire url minus the origin
    // ex. http://example.com/foo/bar?name=brad -> /foo/bar?name=brad
    const queryStart = asPath.indexOf("?")
    const origin = window.location.origin
    // entire url (with the origin) without any query params
    const url = `${origin}${asPath.substring(0, queryStart)}`

    const input = oauthLoginInput(provider, code, origin, url)
    console.log(input)
  }, [asPath, query])

  return (
    <Box textAlign="center">
      <Typography variant="h1">
        Transferring to login system ........
      </Typography>
    </Box>
  )
}
