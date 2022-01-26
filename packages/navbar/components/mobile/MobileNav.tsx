import { navbarStyles } from "navbar/styles/Navbar";
import { NavItem } from "navbar/types";
import { Box } from "@material-ui/core";
import { useState } from "react";
import { MobileMenuButton } from "navbar/components/mobile/MobileMenuButton";
import { MobileNavMenu } from "navbar/components/mobile/MobileNavMenu";

export interface DesktopNavProps {
  items: Array<NavItem>;
}

export const MobileNav = ({ items }: DesktopNavProps) => {
  const styles = navbarStyles();
  const [open, setOpen] = useState(false);

  return (
    <Box className={styles.navbar}>
      <MobileMenuButton open={open} setOpen={setOpen} />
      <MobileNavMenu items={items} open={open} />
    </Box>
  );
};
