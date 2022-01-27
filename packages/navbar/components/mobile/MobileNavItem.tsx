import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { MobileNavItemProps } from "navbar/types";
import { navbarStyles } from "navbar/styles/Navbar";

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
          {item.items.map(({ link, label }, j) => {
            return (
              <a href={link}>
                <ListItem button>
                  <ListItemText
                    className={styles.mobileNavSubItem}
                    primary={label}
                  />
                </ListItem>
              </a>
            );
          })}
        </List>
      </AccordionDetails>
    </Accordion>
  );
};
