import { MuiThemeProvider, useMediaQuery } from "@material-ui/core"
import { NavbarProps } from "navbar/src/types/index"
import { muiTheme } from "navbar/src/styles/customTheme"
import { DesktopNav } from "navbar/src/components/desktop/DesktopNav"
import { MobileNav } from "navbar/src/components/mobile/MobileNav"

export const Navbar = ({ items, theme, isMobile }: NavbarProps) => {
  const customTheme = theme ? theme : muiTheme
  const mobileScreen = isMobile ? isMobile : useMediaQuery("(max-width: 768px)")

  return (
    <MuiThemeProvider theme={customTheme}>
      {mobileScreen ? (
        <MobileNav items={items} />
      ) : (
        <DesktopNav items={items} />
      )}
    </MuiThemeProvider>
  )
}
