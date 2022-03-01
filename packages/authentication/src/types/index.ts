export interface IClientProvider {
  clientId: string
}

export interface IClientConfig {
  google: IClientProvider
  linkedin: IClientProvider
  orcid: IClientProvider
}
