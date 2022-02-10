import { Grid } from "@material-ui/core"
import { headerStyles } from "header/src/styles/headerStyles"
import { HeaderContainerProps } from "header/src/types"
import { LogoContainer } from "header/src/components/LogoContainer"
import { LinksContainer } from "./LinksContainer"

export const HeaderContainer = ({
  home,
  logo,
  links,
}: HeaderContainerProps) => {
  const classes = headerStyles()

  return (
    <Grid className={classes.header} container alignItems="center">
      <LogoContainer home={home} logo={logo} />
      <Grid item container justifyContent="center" xs={12} md={5} lg={4}></Grid>
      <LinksContainer links={links} />
    </Grid>
  )
}
