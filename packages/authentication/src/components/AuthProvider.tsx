import { createContext, ReactNode, useReducer } from "react"
import { AuthStateContextProps } from "@dictyBase/authentication/src/types"
import {
  authInitialState,
  authReducer,
} from "@dictyBase/authentication/src/store/reducers"

export const AuthContext = createContext({} as AuthStateContextProps)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, authInitialState)

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  )
}
