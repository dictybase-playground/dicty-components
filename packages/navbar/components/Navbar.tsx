import { MuiThemeProvider, Theme, useMediaQuery } from "@material-ui/core";
import { NavItem } from "navbar/types/index";
import { muiTheme } from "navbar/styles/customTheme";
import { DesktopNav } from "navbar/components/desktop/DesktopNav";
import { MobileNav } from "navbar/components/mobile/MobileNav";

export interface NavbarProps {
  items: Array<NavItem>;
  theme?: Partial<Theme>;
  brand?: any;
}

export const Navbar = ({ items, theme }: NavbarProps) => {
  const customTheme = theme ? theme : muiTheme;
  const mobileScreen = useMediaQuery("(max-width: 768px)");

  return (
    <MuiThemeProvider theme={customTheme}>
      {mobileScreen ? (
        <MobileNav items={items} />
      ) : (
        <DesktopNav items={items} />
      )}
    </MuiThemeProvider>
  );
};
