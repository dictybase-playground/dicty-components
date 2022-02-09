import { Theme } from "@material-ui/core"

export interface HeaderProps {
  /** List of header items (links) */
  items: HeaderItem[]
  home?: string
  /** Render function to display list of links in header */
  render: ({ items }: { items: HeaderItem[] }) => JSX.Element
  theme?: Partial<Theme>
  logo: string
}

export interface HeaderItem {}

export interface HeaderContainerProps {
  /** List of header items (links) */
  items: HeaderItem[]
  home?: string
  /** Render function to display list of links in header */
  render: ({ items }: { items: HeaderItem[] }) => JSX.Element
  logo: string
}