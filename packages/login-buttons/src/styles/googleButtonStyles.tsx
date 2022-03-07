import { makeStyles } from "@material-ui/core"

export const googleButtonStyles = makeStyles((theme) => ({
  button: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    backgroundColor: "#df4b37",
    "&:hover": {
      backgroundColor: "#a60e0e",
    },
  },
  subtitle: {
    width: "100%",
    color: "#fff",
  },
}))
