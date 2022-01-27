import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
} from "@material-ui/core";
import { MobileNavItemProps } from "navbar/types";
import { navbarStyles } from "navbar/styles/Navbar";
import { MobileNavSubitem } from "navbar/components/mobile/MobileNavSubitem";

export const MobileNavItem = ({
  expanded,
  cur,
  selectOption,
  item,
}: MobileNavItemProps) => {
  const styles = navbarStyles();
  const selected = expanded === cur;

  return (
    <Accordion
      className={selected ? styles.mobileSelectedItem : ""}
      expanded={selected}
      onChange={selectOption(cur)}
      square
    >
      <AccordionSummary expandIcon={<div className={styles.mobileCaret} />}>
        <b>{item.display}</b>
      </AccordionSummary>

      <AccordionDetails className={styles.mobileNavContainer}>
        <List className={styles.mobileNavContainer}>
          {item.items.map((subItem, i) => (
            <MobileNavSubitem item={subItem} key={i} />
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};
