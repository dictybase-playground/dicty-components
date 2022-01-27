import React from "react"
import { navbarStyles } from "navbar/src/styles/Navbar"
import { DesktopNavProps } from "navbar/src/types"
import { Box } from "@material-ui/core"
import { useState } from "react"
import { MobileMenuButton } from "navbar/src/components/mobile/MobileMenuButton"
import { MobileNavMenu } from "navbar/src/components/mobile/MobileNavMenu"
import SlideDown from "react-slidedown"

export const MobileNav = ({ items }: DesktopNavProps) => {
  const styles = navbarStyles()
  const [open, setOpen] = useState(false)

  return (
    <Box className={styles.navbar}>
      <MobileMenuButton open={open} setOpen={setOpen} />

      <SlideDown className={styles.reactSlidedown}>
        {open ? <MobileNavMenu items={items} /> : null}
      </SlideDown>
    </Box>
  )
}
