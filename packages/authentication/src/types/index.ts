import React from "react"
import { User } from "dicty-graphql-schema"
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

/** Auth provider */
export enum AuthActionType {
  LOGIN = "LOGIN",
  LOGIN_ERROR = "LOGIN_ERROR",
  LOGOUT = "LOGOUT",
  UPDATE_TOKEN = "UPDATE_TOKEN",
}

export interface AuthState {
  isAuthenticated: boolean
  token: string
  user: User
  provider: string
  error: any
}

export interface AuthPayload {
  token: string
  user: User
  provider: string
}

export interface AuthErrorPayload {
  error: any
}

export type AuthAction =
  | {
      type: AuthActionType.LOGIN
      payload: AuthPayload
    }
  | {
      type: AuthActionType.LOGIN_ERROR
      payload: AuthErrorPayload
    }
  | { type: AuthActionType.LOGOUT }
  | {
      type: AuthActionType.UPDATE_TOKEN
      payload: AuthPayload
    }

export interface AuthStateContextProps {
  state: AuthState
  dispatch: React.Dispatch<AuthAction>
}
