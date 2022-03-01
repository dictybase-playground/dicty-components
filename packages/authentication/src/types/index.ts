export interface IClientProvider {
  clientId: string
}

export interface IClientConfig {
  google: IClientProvider
  linkedin: IClientProvider
  orcid: IClientProvider
}

export interface IOAuthProviderConfig {
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

export interface IOAuthConfig {
  google: IOAuthProviderConfig
  linkedin: IOAuthProviderConfig
  orcid: IOAuthProviderConfig
}