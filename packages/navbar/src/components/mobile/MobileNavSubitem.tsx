import { ListItem, ListItemText } from "@material-ui/core"
import { MobileNavSubitemProps } from "@dictyBase/navbar/src/types"
import { navbarStyles } from "@dictyBase/navbar/src/styles/navbarStyles"

export const MobileNavSubitem = ({ item }: MobileNavSubitemProps) => {
  const styles = navbarStyles()

  return (
    <a href={item.link}>
      <ListItem button>
        <ListItemText
          className={styles.mobileNavSubItem}
          primary={item.label}
        />
      </ListItem>
    </a>
  )
}
