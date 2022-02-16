import { Grid } from "@material-ui/core"
import { headerStyles } from "header/src/styles/headerStyles"
import { LinksContainerProps } from "header/src/types"

export const LinksContainer = ({ links }: LinksContainerProps) => {
  const classes = headerStyles()

  return (
    <Grid
      item
      container
      justifyContent="flex-end"
      xs={12}
      md={4}
      className={classes.linkContainer}>
      {links}
    </Grid>
  )
}
