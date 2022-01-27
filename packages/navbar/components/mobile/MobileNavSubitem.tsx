import { ListItem, ListItemText } from "@material-ui/core";
import { MobileNavSubitemProps } from "navbar/types";
import { navbarStyles } from "navbar/styles/Navbar";

export const MobileNavSubitem = ({ item }: MobileNavSubitemProps) => {
  const styles = navbarStyles();

  return (
    <a href={item.link}>
      <ListItem button>
        <ListItemText
          className={styles.mobileNavSubItem}
          primary={item.label}
        />
      </ListItem>
    </a>
  );
};
