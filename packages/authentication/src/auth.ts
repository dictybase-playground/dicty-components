import {
  OauthProviderConfig,
  Provider,
} from "@dictyBase/authentication/src/types"
import { oauthConfig } from "@dictyBase/authentication/src/oauthConfig"

/**
 * Given an array of "key-value" sub arrays, returns a url param string
 *
 * @param params
 * @returns Given `[["name", "Ayaan"], ["age", "22"]]` returns the string `"name=Ayaan&age=22"`
 */
export const generateParamString = (params: Array<Array<string>>) => {
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
 * const config = oauthConfig("")
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
 * Given a name for an oauth provider opens a pop-up window to proceed with the authentication
 *
 * @param name oauth provider
 * @param callback callback function that gets called after the window is open
 */
export const openOauthWindow = (
  name: Provider,
  baseUrl?: string,
  callback?: () => void,
) => {
  const config = oauthConfig(baseUrl ? baseUrl : window.origin)
  const url = createOauthUrl(config[name])
  window.open(
    url,
    name,
    `width=550,
    height=600`,
  )
  if (callback) callback()
}
