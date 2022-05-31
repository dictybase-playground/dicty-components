import { createContext, ReactNode, useReducer } from "react"
import { AuthStateContextProps } from "../types"
import {
  authInitialState,
  authReducer,
} from "../store/reducers"

export const AuthContext = createContext({} as AuthStateContextProps)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState)

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
