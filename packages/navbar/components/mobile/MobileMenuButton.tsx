import { navbarStyles } from "navbar/styles/Navbar";
import { Dispatch, SetStateAction } from "react";

export interface MobileMenuButtonProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export const MobileMenuButton = ({ open, setOpen }: MobileMenuButtonProps) => {
  const styles = navbarStyles();
  const hamburgerMenu = open
    ? `${styles.mobileMenuButton} ${styles.hamOpen}`
    : styles.mobileMenuButton;

  return (
    <div className={styles.mobileMenuButtonContainer}>
      <div className={hamburgerMenu} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
