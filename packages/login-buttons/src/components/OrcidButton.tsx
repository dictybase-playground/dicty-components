import { Button, Typography } from "@material-ui/core"
import { OrcidButtonProps } from "login-buttons/src/types"
import { OrcidIcon } from "login-buttons/src/components/icons/OrcidIcon"
import { orcidButtonStyles } from "login-buttons/src/styles/orcidButtonStyles"

export const OrcidButton = ({ handleClick, text }: OrcidButtonProps) => {
  const classes = orcidButtonStyles()

  return (
    <Button
      variant="contained"
      size="large"
      fullWidth
      startIcon={<OrcidIcon />}
      className={classes.button}
      onClick={handleClick}
      role="orcid-button">
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
