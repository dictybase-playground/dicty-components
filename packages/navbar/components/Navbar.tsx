import { Button, Theme } from "@material-ui/core";
import { navbarStyles } from "navbar/styles/Navbar";
import { NavItem } from "navbar/types/index";

export interface NavbarProps {
  items: Array<NavItem>;
  brand?: any;
  theme?: Theme;
}

export const Navbar = ({ items, brand, theme }: NavbarProps) => {
  const styles = navbarStyles(theme);

  return <Button className={styles.bgRed}>Navbar</Button>;
};
