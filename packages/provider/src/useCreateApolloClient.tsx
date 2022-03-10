import React from "react"
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
} from "@apollo/client"
import { setContext } from "@apollo/client/link/context"
import { CachePersistor, LocalForageWrapper } from "apollo3-cache-persist"
import localForage from "localforage"
import { version } from "dicty-graphql-schema/package.json"

const SCHEMA_VERSION_KEY = "gene-apollo-schema-version"
const GENE_CACHE_KEY = "gene-apollo-cache-persist"

// GraphQL servers
const GRAPHQL_SERVER = "https://ericgraphql.dictybase.dev"
const GRAPHQL_ALT_SERVER = "https://betagraphql.dictycr.org"

const mutationList = ["Logout"]

export const isMutation = (value: string) => {
  if (mutationList.includes(value)) {
    return true
  }
  return false
}

export const getGraphQLServer = (deployEnv: string, origin: string) => {
  if (deployEnv === "staging" && origin === "https://dictycr.org") {
    return GRAPHQL_ALT_SERVER
  }
  return GRAPHQL_SERVER
}

const cache = new InMemoryCache()

const authLink = setContext((request, { headers }) => {
  const mutation = isMutation(request.operationName || "")
  return {
    headers: {
      ...headers,
      "X-GraphQL-Method": mutation ? "Mutation" : "Query",
    },
  }
})

const createApolloLink = (server: string): ApolloLink =>
  authLink.concat(
    createHttpLink({
      uri: `${server}/graphql`,
      credentials: "include",
    }),
  )

export const useCreateApolloClient = (deployEnv: string) => {
  const [cacheInitializing, setCacheInitializing] = React.useState(true)
  const [link, setLink] = React.useState<ApolloLink>()

  React.useEffect(() => {
    const server = getGraphQLServer(deployEnv, window.location.origin)
    setLink(createApolloLink(server))
  }, [])

  React.useEffect(() => {
    const initializeCache = async () => {
      const persistor = new CachePersistor({
        cache,
        storage: new LocalForageWrapper(localForage),
        key: GENE_CACHE_KEY,
      })
      const currentVersion = await localForage.getItem(SCHEMA_VERSION_KEY)
      if (currentVersion === version) {
        // If the current version matches the latest version,
        // we're good to go and can restore the cache.
        await persistor.restore()
      } else {
        // Otherwise, we'll want to purge the outdated persisted cache
        // and mark ourselves as having updated to the latest version.
        await persistor.purge()
        await localForage.setItem(SCHEMA_VERSION_KEY, version)
      }
      setCacheInitializing(false)
    }
    initializeCache()
  }, [])

  const client = new ApolloClient({
    cache,
    link,
  })
  return { client, cacheInitializing }
}
