import { ReactNode } from "react"

export interface AppProviderProps {
  server: string
  altServer: string
  deployEnv: string
  children: ReactNode
}
