import { Button, Typography } from "@material-ui/core"
import { LinkedInButtonProps } from "@dictyBase/login-buttons/src/types"
import { LinkedInIcon } from "@dictyBase/login-buttons/src/components/icons/LinkedInIcon"
import { linkedInButtonStyles } from "@dictyBase/login-buttons/src/styles/linkedInButtonStyles"

export const LinkedInButton = ({ handleClick, text }: LinkedInButtonProps) => {
  const classes = linkedInButtonStyles()

  return (
    <Button
      variant="contained"
      size="large"
      fullWidth
      startIcon={<LinkedInIcon />}
      className={classes.button}
      onClick={handleClick}
      role="linkedin-button">
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
