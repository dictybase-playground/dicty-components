import { navbarStyles } from "navbar/styles/Navbar";
import { NavItem } from "navbar/types";
import { DesktopNavItem } from "navbar/components/desktop/DesktopNavItem";
import { Box } from "@material-ui/core";

export interface DesktopNavProps {
  items: Array<NavItem>;
}

export const DesktopNav = ({ items }: DesktopNavProps) => {
  const styles = navbarStyles();

  return (
    <Box className={styles.navbar}>
      <ul className={styles.desktopNavContainer}>
        {items.map(({ attributes }, i) => (
          <DesktopNavItem item={attributes} key={i} />
        ))}
      </ul>
    </Box>
  );
};
