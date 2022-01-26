import { createTheme } from "@material-ui/core";

const primaryColor = "#004080";
const blueSecondaryColor = "#001b53";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: blueSecondaryColor,
    },
  },
});
