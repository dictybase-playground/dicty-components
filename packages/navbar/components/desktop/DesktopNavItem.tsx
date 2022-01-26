import { navbarStyles } from "navbar/styles/Navbar";
import { NavItem } from "navbar/types";
import React from "react";
import { DesktopNavSubmenu } from "./DesktopNavSubmenu";

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
  const prevOpen = React.useRef<boolean>(open);
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

      <DesktopNavSubmenu
        open={open}
        subItems={item.items}
        anchorRef={anchorRef}
        handleClose={handleClose}
      />
    </div>
  );
};
