import { navbarStyles } from "navbar/styles/Navbar";
import { NavItem } from "navbar/types/index";

export interface DesktopNavItemProps {
  item: NavItem["attributes"];
}

export const DesktopNavItem = ({ item }: DesktopNavItemProps) => {
  const styles = navbarStyles();
  return <li>{item.display}</li>;
};
