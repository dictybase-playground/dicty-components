import { makeStyles, Theme } from "@material-ui/core"

export const headerStyles = makeStyles((theme: Theme) => ({
  header: {
    fontFamily: theme.typography.fontFamily,
    backgroundColor: theme.palette.common.white,
  },
  logoContainer: {
    paddingBottom: "0px",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center",
    },
  },
  dcr: {
    fontWeight: 400,
    fontSize: "1.1em",
    color: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(3),
    [theme.breakpoints.only("md")]: { paddingLeft: theme.spacing(2) },
    [theme.breakpoints.down("md")]: {
      paddingTop: "0px",
      paddingBottom: theme.spacing(0.5),
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
    fontStyle: "italic",
  },
  left: {
    [theme.breakpoints.down("sm")]: {
      display: "inline-block",
    },
    [theme.breakpoints.only("md")]: {
      display: "inline-block",
      textAlign: "left",
    },
  },
  logo: {
    maxWidth: "180px",
    padding: theme.spacing(1.5),
  },
  linkContainer: {
    paddingBottom: "0px",
    fontSize: "0.8em",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      marginTop: theme.spacing(2),
    },
    "& a": {
      color: theme.palette.text.primary,
      textDecoration: "none",
      "&:hover": {
        color: theme.palette.secondary.main,
      },
    },
  },
  linkButton: {
    padding: "15px",
    "& a": {
      color: theme.palette.primary.main,
      "&&:hover": {
        color: theme.palette.primary.dark,
      },
    },
  },
  linkIconHolder: {
    textAlign: "center",
  },
  linkIcon: {
    marginBottom: "2px",
  },
  linkText: {},
}))
