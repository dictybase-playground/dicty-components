import { User } from "dicty-graphql-schema"
import {
  AuthState,
  AuthAction,
  AuthActionType,
} from "@dictyBase/authentication/src/types"

export const authInitialState: AuthState = {
  isAuthenticated: false,
  token: "",
  user: {} as User,
  provider: "",
  error: null,
}

export const authReducer = (state: AuthState, action: AuthAction) => {
  switch (action.type) {
    case AuthActionType.LOGIN:
      const { token, user, provider } = action.payload
      return {
        ...state,
        isAuthenticated: token !== "" && user ? true : false,
        token,
        user,
        provider,
        error: null
      }
    case AuthActionType.LOGIN_ERROR:
      return {...authInitialState, error: action.payload.error}
    case AuthActionType.LOGOUT:
      return {...authInitialState}
    case AuthActionType.UPDATE_TOKEN:
      return {...state, token: action.payload.token}
    default:
      return state
  }
}
