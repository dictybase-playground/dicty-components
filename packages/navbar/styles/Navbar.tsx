import { makeStyles, Theme } from "@material-ui/core";

export const navbarStyles = makeStyles((theme: Theme) => ({
  navbar: {
    background: theme.palette.primary.main,
    color: "#fff",
    fontFamily: theme.typography.fontFamily,
  },
  desktopNavContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    listStyle: "none",
    height: "50px",
    margin: "0px",
    padding: "0px",
  },
  desktopNavItem: {
    height: "inherit",
    padding: "0px 20px 0px 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    cursor: "pointer",
    "&&:after": {
      content: "''",
      width: "0px",
      height: "0px",
      borderTop: "5px solid #fff",
      borderLeft: "5px solid transparent",
      borderRight: "5px solid transparent",
      position: "absolute",
      right: "4px",
      top: "0",
      bottom: "0",
      margin: "auto",
    },
    "&&:hover, &&:focus, &&:active": {
      background: theme.palette.secondary.main,
    },
  },
}));
