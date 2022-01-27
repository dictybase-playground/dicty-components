import React from "react"
import { navbarStyles } from "navbar/src/styles/Navbar"
import { DesktopNavProps } from "navbar/src/types"
import { DesktopNavItem } from "navbar/src/components/desktop/DesktopNavItem"
import { Box } from "@material-ui/core"

export const DesktopNav = ({ items }: DesktopNavProps) => {
  const styles = navbarStyles()

  return (
    <Box className={styles.navbar}>
      <ul className={styles.desktopNavContainer}>
        {items.map(({ attributes }, i) => (
          <DesktopNavItem item={attributes} key={i} />
        ))}
      </ul>
    </Box>
  )
}
