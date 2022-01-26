import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@material-ui/core";
import { NavItem } from "navbar/types";
import { navbarStyles } from "navbar/styles/Navbar";

export interface MobileNavItemProps {
  expanded: number | false;
  cur: number;
  selectOption: (
    panel: number
  ) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => void;
  item: NavItem["attributes"];
}

export const MobileNavItem = ({
  expanded,
  cur,
  selectOption,
  item,
}: MobileNavItemProps) => {
  const styles = navbarStyles();

  return (
    <Accordion expanded={expanded === cur} onChange={selectOption(cur)} square>
      <AccordionSummary expandIcon={<div className={styles.mobileCaret} />}>
        {item.display}
      </AccordionSummary>
      <AccordionDetails>
        <ul>
          {item.items.map((subNavItem, j) => (
            <li>{subNavItem.label}</li>
          ))}
        </ul>
      </AccordionDetails>
    </Accordion>
  );
};
