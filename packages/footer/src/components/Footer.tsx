import { MuiThemeProvider } from "@material-ui/core"
import { FooterProps } from "footer/src/types"
import { muiTheme } from "navbar/src/styles/customTheme"
import { FooterContainer } from "footer/src/components/FooterContainer"

export const Footer = ({ theme, links }: FooterProps) => {
  const customTheme = theme ? theme : muiTheme

  return (
    <MuiThemeProvider theme={customTheme}>
      <FooterContainer links={links} />
    </MuiThemeProvider>
  )
}