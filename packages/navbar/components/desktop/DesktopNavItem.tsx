import {
  ClickAwayListener,
  Grow,
  MenuItem,
  MenuList,
  Paper,
  Popper,
} from "@material-ui/core";
import { navbarStyles } from "navbar/styles/Navbar";
import { NavItem } from "navbar/types/index";
import React from "react";

export interface DesktopNavItemProps {
  item: NavItem["attributes"];
}

export const DesktopNavItem = ({ item }: DesktopNavItemProps) => {
  const styles = navbarStyles();

  // Mui menu
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<any>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: { target: any }) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) return;
    setOpen(false);
  };

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) anchorRef.current.focus();
    prevOpen.current = open;
  }, [open]);

  const caret = open ? styles.caretUp : styles.caretDown;

  return (
    <div className={`${styles.desktopNavItemRoot} ${caret}`}>
      <li
        className={styles.desktopNavItem}
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        {item.display}
      </li>

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
                  {item.items.map((subItem, i) => (
                    <MenuItem key={i}>{subItem.label}</MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};
