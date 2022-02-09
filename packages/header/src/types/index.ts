import { Theme } from "@material-ui/core"

export interface HeaderProps {
  /** List of header items (links) */
  items: HeaderItem[]
  /** Link for the logo that goes to the home page */
  home?: string
  /** Render function to display list of links in header */
  render: ({ items }: { items: HeaderItem[] }) => JSX.Element
  /** CSS color theme to use in header */
  theme: Theme
}

export interface HeaderItem {}
