import { makeStyles } from "@material-ui/core"

export const linkedInButtonStyles = makeStyles((theme) => ({
  button: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    backgroundColor: "#2867B2",
    "&:hover": {
      backgroundColor: "#003d82",
    },
  },
  subtitle: {
    width: "100%",
    color: "#fff",
  },
}))
