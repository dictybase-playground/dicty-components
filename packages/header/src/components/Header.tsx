import { MuiThemeProvider } from "@material-ui/core"
import { HeaderProps } from "header/src/types"
import { muiTheme } from "navbar/src/styles/customTheme"
import { HeaderContainer } from "header/src/components/HeaderContainer"

/**
 * Renders dictyBase header
 * 
 * ```tsx
 * import { Header, HeaderLink } from "header"
 * import logo from "header/src/images/logo.png"
 * 
 * <Header logo={logo.src} caption="Dicty Community Resource">
 *  <HeaderLink 
 *    url="/foo" 
 *    text="Foo" 
 *    icon={<AddIcon fontSize="large" />}
 *    isNextLink
 *  />
 *  ...
 *  <HeaderLink 
 *    url="/bar" 
 *    text="Bar" 
 *    icon={<svg />}
 *    isNextLink
 *  />
 * </Header>
 * ```
 */
export const Header = ({ theme, children, ...rest }: HeaderProps) => {
  const customTheme = theme ? theme : muiTheme

  return (
    <MuiThemeProvider theme={customTheme}>
      <HeaderContainer links={children} {...rest} />
    </MuiThemeProvider>
  )
}
