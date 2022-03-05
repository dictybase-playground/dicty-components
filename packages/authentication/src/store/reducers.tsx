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
      const token = action.payload.token
      return {
        ...state,
        isAuthenticated: token !== "" ? true : false,
        token,
        user: action.payload.user,
        provider: action.payload.provider,
        error: null,
      }
    case AuthActionType.LOGIN_ERROR: {
      return {
        ...state,
        error: action.payload.error,
      }
    }
    case AuthActionType.LOGOUT:
      return authInitialState
    case AuthActionType.UPDATE_TOKEN:
      const newToken = action.payload.token
      return {
        ...state,
        isAuthenticated: true,
        token: newToken,
        user: action.payload.user,
        provider: action.payload.provider,
        error: null,
      }
    default:
      return state
  }
}
