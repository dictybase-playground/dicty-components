import { makeStyles, Theme } from "@material-ui/core"

export const searchStyles = makeStyles((theme: Theme) => ({
  textField: {
    paddingBottom: "0px",
    [theme.breakpoints.down("md")]: {
      marginTop: "0px",
    },
  },
  searchIcon: {
    color: theme.palette.primary.main,
  },
  inputLabel: {
    fontSize: "0.8em",
  },
}))
