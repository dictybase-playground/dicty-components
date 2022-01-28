import React from "react"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
} from "@material-ui/core"
import { MobileNavMenuitemProps } from "navbar/src/types"
import { navbarStyles } from "navbar/src/styles/navbarStyles"
import { MobileNavSubitem } from "navbar/src/components/mobile/MobileNavSubitem"

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
