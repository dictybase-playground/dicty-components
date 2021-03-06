import { Box, Grid, Typography } from "@material-ui/core"
import { footerStyles } from "@dictyBase/footer/src/styles/footerStyles"
import { FooterHeadProps } from "@dictyBase/footer/src/types"

export const FooterHead = ({ title }: FooterHeadProps) => {
  const classes = footerStyles()

  return (
    <Grid item xs={12}>
      <Box my={2} textAlign="center">
        <Typography className={classes.header}>{title}</Typography>
      </Box>
    </Grid>
  )
}
