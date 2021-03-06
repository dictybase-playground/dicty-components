import { Grid } from "@material-ui/core"
import { LogoContainerProps } from "@dictyBase/header/src/types"
import { headerStyles } from "@dictyBase/header/src/styles/headerStyles"

export const LogoContainer = ({ home, logo, caption }: LogoContainerProps) => {
  const classes = headerStyles()

  return (
    <Grid item xs={12} md={3} lg={4} className={classes.logoContainer}>
      <Grid item container className={classes.left}>
        <a href={home ? home : "/"}>
          <img src={logo} alt="dictyBase logo" className={classes.logo} />
        </a>
        {caption ? <div className={classes.dcr}>{caption}</div> : <></>}
      </Grid>
    </Grid>
  )
}
