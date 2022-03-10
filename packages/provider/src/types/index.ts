import { ReactNode } from "react"

export interface AppProviderProps {
  deployEnv: "development" | "staging" | "production" | string
  children: ReactNode
}
