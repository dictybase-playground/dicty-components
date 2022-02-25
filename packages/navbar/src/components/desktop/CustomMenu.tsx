import { ClickAwayListener, Grow, MenuList, Paper } from "@material-ui/core"
import { CustomMenuProps } from "@dictyBase/navbar/src/types"
import { DesktopNavSubitem } from "@dictyBase/navbar/src/components/desktop/DesktopNavSubitem"
import { navbarStyles } from "@dictyBase/navbar/src/styles/navbarStyles"

export const CustomMenu = ({
  subItems,
  handleClose,
  TransitionProps,
}: CustomMenuProps) => {
  const styles = navbarStyles()
  return (
    <Grow {...TransitionProps}>
      <Paper className={styles.desktopNavMenu} variant="outlined" square>
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList>
            {subItems.map((subItem, i) => (
              <DesktopNavSubitem item={subItem} key={i} />
            ))}
          </MenuList>
        </ClickAwayListener>
      </Paper>
    </Grow>
  )
}
