export interface IClientProvider {
  clientId: string
}

export interface IClientConfig {
  google: IClientProvider
  linkedin: IClientProvider
  orcid: IClientProvider
}

export interface IOauthProviderConfig {
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

export interface IOauthConfig {
  google: IOauthProviderConfig
  linkedin: IOauthProviderConfig
  orcid: IOauthProviderConfig
}