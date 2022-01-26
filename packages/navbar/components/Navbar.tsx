import { Box, MuiThemeProvider, Theme, useMediaQuery } from "@material-ui/core";
import { navbarStyles } from "navbar/styles/Navbar";
import { NavItem } from "navbar/types/index";
import { muiTheme } from "navbar/styles/customTheme";

export interface NavbarProps {
  items: Array<NavItem>;
  theme?: Partial<Theme>;
  brand?: any;
}

export const Navbar = ({ items, brand, theme }: NavbarProps) => {
  const customTheme = theme ? theme : muiTheme;
  const styles = navbarStyles(customTheme);
  const mobileScreen = useMediaQuery("(max-width: 768px)");

  return (
    <MuiThemeProvider theme={customTheme}>
      <Box bgcolor="primary">Nav item</Box>
    </MuiThemeProvider>
  );
};
