import {
  OauthProviderConfig,
  Provider,
} from "@dictyBase/authentication/src/types"
import { oauthConfig } from "@dictyBase/authentication/src/oauthConfig"
import { LoginInput } from "dicty-graphql-schema"

/**
 * Given an array of "key-value" sub arrays, returns a url param string
 *
 * @param params
 * @returns Given `[["name", "Ayaan"], ["age", "22"]]` returns the string `"name=Ayaan&age=22"`
 */
export const generateParamString = (params: Array<Array<string>>): string => {
  if (params.length === 0) return ""

  return params
    .reduce((prev, [key, val]) => [...prev, `${key}=${val}`], [])
    .join("&")
}

/**
 * Generate Oauth provider url
 *
 * ### Usage
 * ```ts
 * import { oauthConfig, createOauthUrl } from "@dictyBase/authentication"
 *
 * const config = oauthConfig(window.location.origin)
 * const url = createOauthUrl(config.google)
 * ```
 */
export const createOauthUrl = (config: OauthProviderConfig) => {
  let url = `${config.authorizationEndpoint}?client_id=${config.clientId}`
  url += `&scope=${config.scopes.join(config.scopeDelimiter)}`
  if (config.requiredUrlParams) {
    url += "&" + generateParamString(config.requiredUrlParams)
  }
  url += `&redirect_uri=${config.redirectUrl}`
  return url
}

/**
 * Given a name for an oauth provider launches the oauth provider sign-in page
 * to proceed with the authentication
 * 
 * ### Usage
 * ```tsx
 * import { GoogleButton } from "@dictyBase/login-buttons"
 * import { openOauth } from "@dictyBase/authentication"
 * import { useRouter } from "next/router"
 * 
 * const {push} = useRouter()
 * 
 * <GoogleButton 
 *  handleClick={() => openOauth("google", (url) => push(url))}
 *  text="Sign in with Google"
 * />
 * ```
 *
 * @param name oauth provider
 * @param callback callback function that gets called after the window is open
 */
export const openOauth = (
  name: Provider,
  callback: (oauthUrl: string) => void,
  baseUrl?: string,
) => {
  const config = oauthConfig(baseUrl ? baseUrl : window.origin)
  const url = createOauthUrl(config[name])
  callback(url)
}

/**
 * Generates `LoginInput` data
 *
 * ### Usage
 * ```tsx
 * import React from "react"
 * import { useRouter } from "next/router"
 * import { useLoginMutation } from "dicty-graphql-schema"
 * import { oauthLoginInput, Provider } from "@dictyBase/authentication"
 *
 * export default function OauthCallbackPage() {
 *  const [login] = useLoginMutation()
 *  const { query } = useRouter()
 *  React.useEffect(() => {
 *    if (!query.provider || !query.code) return
 *    const provider = query.provider as Provider
 *    const code = query.code as string
 * 
 *    const input = oauthLoginInput(provider, code)
 *    const { data } = await login({ variables: { input } })
 *  }, [query, login]) 
 * 
 *  return (<h1>Logging in...</h1>)
 * }
 * ```
 *
 * @param provider name of the Oauth provider
 * @param code Oauth code
 * @returns `LoginInput` to be used as variable param to generate authenticate and generate JWT using the graphql server
 */
export const oauthLoginInput = (
  provider: Provider,
  code: string,
  scope?: string,
  state?: string,
): LoginInput => {
  const origin = window.location.origin
  const providerConfig = oauthConfig(origin)[provider]
  const loginData: LoginInput = {
    client_id: providerConfig.clientId,
    code: code,
    provider: provider,
    redirect_url: `${origin}${window.location.pathname}`,
    scopes: scope || "",
    state: state || "state",
  }
  return loginData
}