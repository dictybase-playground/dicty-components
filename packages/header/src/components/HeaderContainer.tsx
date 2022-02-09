import { Grid } from "@material-ui/core"
import { headerStyles } from "header/src/styles/headerStyles"
import { HeaderContainerProps } from "header/src/types"

export const HeaderContainer = ({ home, logo }: HeaderContainerProps) => {
  const classes = headerStyles()

  return (
    <Grid container alignItems="center">
      <Grid item xs={12} md={3} lg={4} className={classes.logoContainer}>
        <Grid item container className={classes.left}>
          <a href={home}>
            <img src={logo} alt="dictyBase logo" className={classes.logo} />
          </a>
          <div className={classes.dcr}>
            <em>Dicty Community Resource</em>
          </div>
        </Grid>
      </Grid>
      <Grid item container justifyContent="center" xs={12} md={5} lg={4}></Grid>
      <Grid
        item
        container
        justifyContent="flex-end"
        xs={12}
        md={4}
        className={classes.linkContainer}>
        {/* <Links items={items} /> */}
      </Grid>
    </Grid>
  )
}
