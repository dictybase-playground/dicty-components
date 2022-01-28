import React from "react"
import { navbarStyles } from "navbar/src/styles/navbarStyles"
import { DesktopNavItemProps } from "navbar/src/types"
import { DesktopNavSubmenu } from "navbar/src/components/desktop/DesktopNavSubmenu"

export const DesktopNavItem = ({ item }: DesktopNavItemProps) => {
  const styles = navbarStyles()

  // Mui menu
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef<any>(null)

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen)
  }

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) return
    setOpen(false)
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef<boolean>(open)
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) anchorRef.current.focus()
    prevOpen.current = open
  }, [open])

  const caret = open ? styles.caretUp : styles.caretDown
  const navItem = open
    ? `${styles.desktopNavItem} ${styles.focused}`
    : styles.desktopNavItem

  return (
    <div
      className={`${styles.desktopNavItemRoot} ${caret}`}
      onClick={handleToggle}>
      <li
        className={navItem}
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true">
        {item.display}
      </li>

      <DesktopNavSubmenu
        open={open}
        subItems={item.items}
        anchorRef={anchorRef}
        handleClose={handleClose}
      />
    </div>
  )
}
