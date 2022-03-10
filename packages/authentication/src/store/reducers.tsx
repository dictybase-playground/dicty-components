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
      state.isAuthenticated = token !== "" && user ? true : false
      state.token = token
      state.user = user
      state.provider = provider
      state.error = null
      return { ...state }
    case AuthActionType.LOGIN_ERROR:
      state = authInitialState // reset state
      state.error = action.payload.error
      return {...state}
    case AuthActionType.LOGOUT:
      return authInitialState
    case AuthActionType.UPDATE_TOKEN:
      state.token = action.payload.token
      return {...state}
    default:
      return state
  }
}
