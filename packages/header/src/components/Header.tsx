import { MuiThemeProvider } from "@material-ui/core"
import { HeaderProps } from "header/src/types"
import { muiTheme } from "navbar/src/styles/customTheme"
import { HeaderContainer } from "header/src/components/HeaderContainer"

export const Header = ({ theme, ...rest }: HeaderProps) => {
  const customTheme = theme ? theme : muiTheme

  return (
    <MuiThemeProvider theme={customTheme}>
      <HeaderContainer {...rest} />
    </MuiThemeProvider>
  )
}
