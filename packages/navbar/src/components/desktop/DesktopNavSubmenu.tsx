import React from "react"
import { DesktopNavSubmenuProps } from "navbar/src/types"
import { navbarStyles } from "navbar/src/styles/Navbar"
import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@material-ui/core"

export const DesktopNavSubmenu = ({
  open,
  subItems,
  anchorRef,
  handleClose,
}: DesktopNavSubmenuProps) => {
  const styles = navbarStyles()

  return (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      transition
      disablePortal
      placement="bottom-start">
      {({ TransitionProps }) => (
        <Grow {...TransitionProps}>
          <Paper elevation={0} variant="outlined" square>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList autoFocusItem={open}>
                {subItems.map(({ link, label }, i) => (
                  <a href={link}>
                    <MenuItem className={styles.desktopMenuItem} key={i}>
                      {label}
                    </MenuItem>
                  </a>
                ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  )
}
