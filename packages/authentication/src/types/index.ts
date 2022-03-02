export interface ClientProvider {
  clientId: string
}

export type Provider = "google" | "linkedin" | "orcid"

export interface ClientConfig {
  google: ClientProvider
  linkedin: ClientProvider
  orcid: ClientProvider
}

export interface OauthProviderConfig {
  name: string
  url: string
  authorizationEndpoint: string
  clientId: string
  redirectUrl: string
  requiredUrlParams: Array<Array<string>>
  scopes: Array<string>
  scopeDelimiter: string
  optionalUrlParams?: Array<Array<string>>
}

export interface OauthConfig {
  google: OauthProviderConfig
  linkedin: OauthProviderConfig
  orcid: OauthProviderConfig
}

export interface OauthCallbackData {
  query: string
  provider: Provider
  url: string
}
