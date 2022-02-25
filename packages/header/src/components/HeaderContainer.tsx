import { Grid } from "@material-ui/core"
import { headerStyles } from "@dictyBase/header/src/styles/headerStyles"
import { HeaderContainerProps } from "@dictyBase/header/src/types"
import { LogoContainer } from "@dictyBase/header/src/components/LogoContainer"
import { LinksContainer } from "./LinksContainer"
import { SearchContainer } from "./SearchContainer"

export const HeaderContainer = ({
  home,
  logo,
  links,
  caption,
}: HeaderContainerProps) => {
  const classes = headerStyles()

  return (
    <Grid className={classes.header} container alignItems="center">
      <LogoContainer home={home} logo={logo} caption={caption} />
      <SearchContainer />
      <LinksContainer links={links} />
    </Grid>
  )
}
