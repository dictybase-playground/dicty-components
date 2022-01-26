import { NavItem } from "navbar/types";
import { navbarStyles } from "navbar/styles/Navbar";
import { useState } from "react";
import { MobileNavItem } from "./MobileNavItem";

export interface MobileNavMenuProps {
  open: boolean;
  items: Array<NavItem>;
}

export const MobileNavMenu = ({ open, items }: MobileNavMenuProps) => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (panel: number) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const styles = navbarStyles();
  const navClass = open
    ? styles.mobileMenuContainer
    : `${styles.mobileMenuContainer} ${styles.menuHidden}`;

  return (
    <div className={navClass}>
      {items.map(({ attributes }, i) => (
        <MobileNavItem
          expanded={expanded}
          cur={i}
          selectOption={handleChange}
          item={attributes}
        />
      ))}
    </div>
  );
};
