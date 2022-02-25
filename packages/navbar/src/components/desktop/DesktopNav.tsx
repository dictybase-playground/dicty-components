import { navbarStyles } from "@dictyBase/navbar/src/styles/navbarStyles"
import { DesktopNavProps } from "@dictyBase/navbar/src/types"
import { DesktopNavItem } from "@dictyBase/navbar/src/components/desktop/DesktopNavItem"
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
