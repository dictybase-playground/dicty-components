import { SubNavItem } from "navbar/types";
import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@material-ui/core";

export interface DesktopNavSubmenuProps {
  open: boolean;
  subItems: Array<SubNavItem>;
  anchorRef: React.MutableRefObject<any>;
  handleClose: (event: { target: any }) => void;
}

export const DesktopNavSubmenu = ({
  open,
  subItems,
  anchorRef,
  handleClose,
}: DesktopNavSubmenuProps) => {
  return (
    <Popper
      open={open}
      anchorEl={anchorRef.current}
      transition
      disablePortal
      placement="bottom-start"
    >
      {({ TransitionProps }) => (
        <Grow {...TransitionProps}>
          <Paper elevation={0} variant="outlined" square>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList autoFocusItem={open} id="menu-list-grow">
                {subItems.map((subItem, i) => (
                  <MenuItem key={i}>{subItem.label}</MenuItem>
                ))}
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  );
};
