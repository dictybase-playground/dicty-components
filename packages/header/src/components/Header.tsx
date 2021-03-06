import { MuiThemeProvider } from "@material-ui/core"
import { HeaderProps } from "@dictyBase/header/src/types"
import { muiTheme } from "@dictyBase/navbar/src/styles/customTheme"
import { HeaderContainer } from "@dictyBase/header/src/components/HeaderContainer"

/**
 * Renders dictyBase header
 * 
 * ```tsx
 * import { Header, HeaderLink } from "@dictyBase/header"
 * import logo from "@dictyBase/header/src/images/logo.png"
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
