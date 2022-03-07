import { makeStyles } from "@material-ui/core"

export const orcidButtonStyles = makeStyles((theme) => ({
  button: {
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    backgroundColor: "#a6ce39",
    "&:hover": {
      backgroundColor: "#739d00",
    },
  },
  subtitle: {
    width: "100%",
    color: "#fff",
  },
}))
