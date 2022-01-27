import { MobileNavMenuProps } from "navbar/types";
import { navbarStyles } from "navbar/styles/Navbar";
import { useState } from "react";
import { MobileNavItem } from "navbar/components/mobile/MobileNavItem";

export const MobileNavMenu = ({ items }: MobileNavMenuProps) => {
  const [expanded, setExpanded] = useState<number | false>(false);

  const handleChange =
    (panel: number) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const styles = navbarStyles();

  return (
    <div className={styles.mobileMenuContainer}>
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
