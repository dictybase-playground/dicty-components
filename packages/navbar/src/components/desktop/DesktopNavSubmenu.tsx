import React from "react"
import { DesktopNavSubmenuProps } from "navbar/src/types"
import {
  ClickAwayListener,
  Grow,
  MenuList,
  Paper,
  Popper,
} from "@material-ui/core"
import { DesktopNavSubitem } from "navbar/src/components/desktop/DesktopNavSubitem"

const CustomMenu = ({ subItems, handleClose }: DesktopNavSubmenuProps) => (
  <Paper elevation={0} variant="outlined" square>
    <ClickAwayListener onClickAway={handleClose}>
      <MenuList>
        {subItems.map((subItem, i) => (
          <DesktopNavSubitem item={subItem} key={i} />
        ))}
      </MenuList>
    </ClickAwayListener>
  </Paper>
)

export const DesktopNavSubmenu = (props: DesktopNavSubmenuProps) => (
  <Popper
    open={props.open}
    anchorEl={props.anchorRef.current}
    transition
    disablePortal
    placement="bottom-start"
    children={({ TransitionProps }) => (
      <Grow {...TransitionProps}>
        <CustomMenu {...props} />
      </Grow>
    )}
  />
)
