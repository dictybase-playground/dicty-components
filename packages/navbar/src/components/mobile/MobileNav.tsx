import { navbarStyles } from "@dictyBase/navbar/src/styles/navbarStyles"
import { DesktopNavProps } from "@dictyBase/navbar/src/types"
import { Box } from "@material-ui/core"
import { useState } from "react"
import { MobileMenuButton } from "@dictyBase/navbar/src/components/mobile/MobileMenuButton"
import { MobileNavMenu } from "@dictyBase/navbar/src/components/mobile/MobileNavMenu"
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
