import { OauthProviderConfig } from "./types/index"

const generateParamString = (params: Array<Array<string>>) => {
  return params
    .reduce((prev, [key, val]) => [...prev, `${key}=${val}`], [])
    .join("&")
}

export const createOauthUrl = (config: OauthProviderConfig) => {
  let url = `${config.authorizationEndpoint}?client_id=${config.clientId}`
  url += `&scope=${config.scopes.join(config.scopeDelimiter)}`
  if (config.requiredUrlParams) {
    url += generateParamString(config.requiredUrlParams)
  }
  url += `&redirect_uri=${config.redirectUrl}`
  return url
}
