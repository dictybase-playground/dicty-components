import { navbarStyles } from "navbar/styles/Navbar";
import { DesktopNavProps } from "navbar/types";
import { Box } from "@material-ui/core";
import { useState } from "react";
import { MobileMenuButton } from "navbar/components/mobile/MobileMenuButton";
import { MobileNavMenu } from "navbar/components/mobile/MobileNavMenu";

export const MobileNav = ({ items }: DesktopNavProps) => {
  const styles = navbarStyles();
  const [open, setOpen] = useState(false);

  const mainNavClasses = open
    ? `${styles.navbar} ${styles.menuShow}`
    : `${styles.navbar} ${styles.menuHide}`;

  return (
    <Box className={mainNavClasses}>
      <MobileMenuButton open={open} setOpen={setOpen} />
      <MobileNavMenu items={items} open={open} />
    </Box>
  );
};
