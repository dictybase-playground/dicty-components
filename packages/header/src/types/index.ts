import { SvgIconProps, Theme } from "@material-ui/core"
import React from "react"

export interface HeaderProps {
  home?: string
  theme?: Partial<Theme>
  links: Array<HeaderLink>
  logo: string
  caption?: string
}

export interface HeaderContainerProps {
  home?: string
  links: Array<HeaderLink>
  logo: string
  caption?: string
}

export interface HeaderLink {
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
  links: Array<HeaderLink>
}