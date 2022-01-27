import { navbarStyles } from "navbar/styles/Navbar";
import { DesktopNavProps } from "navbar/types";
import { Box } from "@material-ui/core";
import { useState } from "react";
import { MobileMenuButton } from "navbar/components/mobile/MobileMenuButton";
import { MobileNavMenu } from "navbar/components/mobile/MobileNavMenu";
import SlideDown from "react-slidedown";

export const MobileNav = ({ items }: DesktopNavProps) => {
  const styles = navbarStyles();
  const [open, setOpen] = useState(false);

  return (
    <Box className={styles.navbar}>
      <MobileMenuButton open={open} setOpen={setOpen} />

      <SlideDown className={styles.reactSlidedown}>
        {open ? <MobileNavMenu items={items} /> : null}
      </SlideDown>
    </Box>
  );
};
