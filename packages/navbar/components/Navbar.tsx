import { Button } from "@material-ui/core";
import { navbarStyles } from "navbar/styles/Navbar";

export const Navbar = () => {
  const styles = navbarStyles();

  return <Button className={styles.bgRed}>Navbar</Button>;
};
