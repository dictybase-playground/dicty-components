import { Button, Typography } from "@material-ui/core";
import { GoogleButtonProps } from "login-buttons/src/types";
import { GoogleIcon } from "login-buttons/src/components/icons/GoogleIcon";

export const GoogleButton = ({ handleClick, text }: GoogleButtonProps) => {
  const classes: any = {};

  return (
    <Button
      variant="contained"
      size="large"
      fullWidth
      startIcon={<GoogleIcon />}
      className={classes.button}
      onClick={handleClick}
    >
      <Typography
        className={classes.subtitle}
        variant="inherit"
        align="center"
        color="textSecondary"
      >
        {text}
      </Typography>
    </Button>
  );
};
