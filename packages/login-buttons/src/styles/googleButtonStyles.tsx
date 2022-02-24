import { makeStyles } from "@material-ui/core";

export const googleButtonStyles = makeStyles((theme) => ({
  button: {
    padding: theme.spacing(2),
    backgroundColor: "#df4b37",
    "&:hover": {
      backgroundColor: "#a60e0e",
    },
  },
  subtitle: {
    width: "100%",
    color: "#fafafa",
  },
}));
