import { makeStyles, Theme } from "@material-ui/core";

export const navbarStyles = makeStyles((theme: Theme) => ({
  navbar: {
    backgroundColor: theme.palette.primary.main,
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
}));
