import { navbarStyles } from "navbar/src/styles/navbarStyles"
import { MobileMenuButtonProps } from "navbar/src/types"

export const MobileMenuButton = ({ open, setOpen }: MobileMenuButtonProps) => {
  const styles = navbarStyles()
  const hamburgerMenu = open
    ? `${styles.mobileMenuButton} ${styles.hamOpen}`
    : styles.mobileMenuButton

  return (
    <div className={styles.mobileMenuButtonContainer}>
      <div
        className={hamburgerMenu}
        onClick={() => setOpen(!open)}
        role="mobile-nav-button">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  )
}
