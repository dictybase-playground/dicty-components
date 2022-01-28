import { MenuItem } from "@material-ui/core"
import { navbarStyles } from "navbar/src/styles/navbarStyles"
import { DesktopNavSubitemProps } from "navbar/src/types"

export const DesktopNavSubitem = ({ item }: DesktopNavSubitemProps) => {
  const styles = navbarStyles()

  return (
    <a href={item.link}>
      <MenuItem className={styles.desktopMenuItem}>{item.label}</MenuItem>
    </a>
  )
}
