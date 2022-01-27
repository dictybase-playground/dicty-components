import React from "react"
import { ClickAwayListener, Grow, MenuList, Paper } from "@material-ui/core"
import { CustomMenuProps } from "navbar/src/types"
import { DesktopNavSubitem } from "navbar/src/components/desktop/DesktopNavSubitem"

export const CustomMenu = ({
  subItems,
  handleClose,
  TransitionProps,
}: CustomMenuProps) => (
  <Grow {...TransitionProps}>
    <Paper elevation={0} variant="outlined" square>
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
