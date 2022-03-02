import { OauthProviderConfig } from "@dictyBase/authentication/src/types"

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
 *
 * @param config
 * @returns
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
