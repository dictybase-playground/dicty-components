import { useCreateApolloClient } from "@dictyBase/provider/src/useCreateApolloClient"
import { ApolloProvider } from "@apollo/client"
import { CircularProgress, MuiThemeProvider } from "@material-ui/core"
import { defaultTheme } from "@dictyBase/provider/src/styles/defaultTheme"
import { AppProviderProps } from "@dictyBase/provider/src/types"

export const AppProvider = ({
  server,
  altServer,
  deployEnv,
  children,
}: AppProviderProps) => {
  const { client, cacheInitializing } = useCreateApolloClient(
    server,
    altServer,
    deployEnv,
  )

  if (cacheInitializing) {
    return <CircularProgress />
  }

  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={defaultTheme}>{children}</MuiThemeProvider>
    </ApolloProvider>
  )
}
