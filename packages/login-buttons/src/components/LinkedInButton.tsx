import { Button, Typography } from "@material-ui/core"
import { LinkedInButtonProps } from "login-buttons/src/types"
import { LinkedInIcon } from "login-buttons/src/components/icons/LinkedInIcon"
import { linkedInButtonStyles } from "login-buttons/src/styles/linkedInButtonStyles"

export const LinkedInButton = ({ handleClick, text }: LinkedInButtonProps) => {
  const classes = linkedInButtonStyles()

  return (
    <Button
      variant="contained"
      size="large"
      fullWidth
      startIcon={<LinkedInIcon />}
      className={classes.button}
      onClick={handleClick}>
      <Typography
        className={classes.subtitle}
        variant="inherit"
        align="center"
        color="textSecondary">
        {text}
      </Typography>
    </Button>
  )
}
