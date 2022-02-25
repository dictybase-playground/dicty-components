import { MobileNavMenuProps } from "@dictyBase/navbar/src/types"
import { navbarStyles } from "@dictyBase/navbar/src/styles/navbarStyles"
import { useState } from "react"
import { MobileNavMenuitem } from "@dictyBase/navbar/src/components/mobile/MobileNavMenuitem"

export const MobileNavMenu = ({ items }: MobileNavMenuProps) => {
  const [expanded, setExpanded] = useState<number | false>(false)

  const handleChange =
    (panel: number) => (_event: React.ChangeEvent<{}>, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false)
    }

  const styles = navbarStyles()

  return (
    <div className={styles.mobileMenuContainer}>
      {items.map(({ attributes }, i) => (
        <MobileNavMenuitem
          expanded={expanded}
          cur={i}
          selectOption={handleChange}
          item={attributes}
          key={i}
        />
      ))}
    </div>
  )
}
