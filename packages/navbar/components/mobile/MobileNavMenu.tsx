import { NavItem } from "navbar/types";
import { navbarStyles } from "navbar/styles/Navbar";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import { useState } from "react";

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
        <Accordion
          expanded={expanded === i}
          onChange={handleChange(i)}
          square
          key={i}
        >
          <AccordionSummary>{attributes.display}</AccordionSummary>
          <AccordionDetails>
            <ul>
              {attributes.items.map((subNavItem, j) => (
                <li>{subNavItem.label}</li>
              ))}
            </ul>
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};
