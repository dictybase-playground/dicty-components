import {
  authReducer,
  AuthActionType,
  authInitialState,
  AuthState,
  Provider,
} from "@dictyBase/authentication"
import { User } from "dicty-graphql-schema"

const initialState = { ...authInitialState }
const mockSuperuser: User = {
  id: "999",
  first_name: "Art",
  last_name: "Vandelay",
  email: "george@vandelayindustries.com",
  is_active: true,
  created_at: 123456,
  updated_at: 678900,
  roles: [],
} as User
const mockToken = "tiubakjdgnjka"
const mockProvider: Provider = "google"

describe("authReducer", () => {
  it("should update state on login", () => {
    expect(
      authReducer(initialState, {
        type: AuthActionType.LOGIN,
        payload: {
          token: mockToken,
          provider: mockProvider,
          user: mockSuperuser,
        },
      }),
    ).toStrictEqual({
      isAuthenticated: true,
      token: mockToken,
      provider: mockProvider,
      user: mockSuperuser,
      error: null,
    })
  })
  it("should return error object when error on login", () => {
    expect(
      authReducer(initialState, {
        type: AuthActionType.LOGIN_ERROR,
        payload: {
          error: {
            message: "test error",
          },
        },
      }),
    ).toStrictEqual({
      ...initialState,
      error: {
        message: "test error",
      },
    })
  })
  it("should return initial state on logout", () => {
    const state: AuthState = {
      isAuthenticated: true,
      token: "jwtxyz",
      user: mockSuperuser,
      provider: "google",
      error: null,
    }
    expect(
      authReducer(state, {
        type: AuthActionType.LOGOUT,
      }),
    ).toStrictEqual(initialState)
  })
  it("should return full updated state when token updated", () => {
    const state: AuthState = {
      isAuthenticated: true,
      token: mockToken,
      provider: mockProvider,
      user: mockSuperuser,
      error: null,
    }
    const newToken = "wthjiowvnfskjkdfsbnkjadb"
    expect(
      authReducer(state, {
        type: AuthActionType.UPDATE_TOKEN,
        payload: {
          token: newToken,
        },
      }),
    ).toStrictEqual({
      isAuthenticated: true,
      token: newToken,
      provider: mockProvider,
      user: mockSuperuser,
      error: null,
    })
  })
  it("should return state if not defined action type", () => {
    const state: AuthState = {
      isAuthenticated: true,
      token: mockToken,
      provider: mockProvider,
      user: mockSuperuser,
      error: null,
    }
    expect(
      authReducer(state, {
        // @ts-ignore
        type: "not a real type",
      }),
    ).toStrictEqual(state)
  })
})
