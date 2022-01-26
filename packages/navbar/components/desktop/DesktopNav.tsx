import { navbarStyles } from "navbar/styles/Navbar";
import { NavItem } from "navbar/types";
import { Theme } from "@material-ui/core";

export interface DesktopNavProps {
  items: Array<NavItem>;
  theme: Partial<Theme>;
}

export const DesktopNav = ({ theme, items }: DesktopNavProps) => {
  const styles = navbarStyles(theme);

  return (
    <ul className={styles.desktopNavContainer}>
      {items.map(({ attributes }, i) => (
        <li key={i}>{attributes.display}</li>
      ))}
    </ul>
  );
};
