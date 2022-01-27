import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
} from "@material-ui/core"
import { MobileNavMenuitemProps } from "navbar/types"
import { navbarStyles } from "navbar/styles/Navbar"
import { MobileNavSubitem } from "navbar/components/mobile/MobileNavSubitem"

export const MobileNavMenuitem = ({
  expanded,
  cur,
  selectOption,
  item,
}: MobileNavMenuitemProps) => {
  const styles = navbarStyles()
  const selected = expanded === cur

  return (
    <Accordion
      className={selected ? styles.mobileSelectedItem : ""}
      expanded={selected}
      onChange={selectOption(cur)}
      square>
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
  )
}
