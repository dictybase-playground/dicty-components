import { SvgIconProps, Theme } from "@material-ui/core"
import React from "react"

export interface HeaderProps {
  home?: string
  theme?: Partial<Theme>
  children: React.ReactNode
  logo: string
  caption?: string
}

export interface HeaderContainerProps {
  home?: string
  links: React.ReactNode
  logo: string
  caption?: string
}

export interface HeaderLinkProps {
  url: string
  text: string
  icon: React.ReactElement<SvgIconProps>
  isNextLink: boolean
}

export interface LogoContainerProps {
  logo: string
  caption?: string
  home?: string
}

export interface LinksContainerProps {
  links: React.ReactNode
}