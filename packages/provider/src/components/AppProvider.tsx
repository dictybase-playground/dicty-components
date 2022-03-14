import { useCreateApolloClient } from "@dictyBase/provider/src/useCreateApolloClient"
import { ApolloProvider } from "@apollo/client"
import { CssBaseline, MuiThemeProvider } from "@material-ui/core"
import { defaultTheme } from "@dictyBase/provider/src/styles/defaultTheme"
import { AppProviderProps } from "@dictyBase/provider/src/types"
import { LoadingScreen } from "@dictyBase/provider/src/components/LoadingScreen"

export const AppProvider = ({ deployEnv, children }: AppProviderProps) => {
  const { client, cacheInitializing } = useCreateApolloClient(deployEnv)

  return (
    <ApolloProvider client={client}>
      <MuiThemeProvider theme={defaultTheme}>
        <CssBaseline />
        {cacheInitializing ? <LoadingScreen /> : children}
      </MuiThemeProvider>
    </ApolloProvider>
  )
}
