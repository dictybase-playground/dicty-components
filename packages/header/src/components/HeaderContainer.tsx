import { Grid } from "@material-ui/core"
import { headerStyles } from "header/src/styles/headerStyles"
import { HeaderContainerProps } from "header/src/types"
import { LogoContainer } from "header/src/components/LogoContainer"
import { LinksContainer } from "./LinksContainer"
import { SearchContainer } from "./SearchContainer"

export const HeaderContainer = ({
  home,
  logo,
  links,
}: HeaderContainerProps) => {
  const classes = headerStyles()

  return (
    <Grid className={classes.header} container alignItems="center">
      <LogoContainer home={home} logo={logo} />
      <SearchContainer />
      <LinksContainer links={links} />
    </Grid>
  )
}
