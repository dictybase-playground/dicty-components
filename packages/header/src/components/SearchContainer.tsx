import {
  FormControl,
  Grid,
  Input,
  InputAdornment,
  InputLabel,
} from "@material-ui/core"
import { Search } from "@material-ui/icons"
import { searchStyles } from "header/src/styles/searchStyles"

export const SearchContainer = () => {
  const classes = searchStyles()

  return (
    <Grid item container justifyContent="center" xs={12} md={5} lg={4}>
      <FormControl className={classes.textField}>
        <InputLabel className={classes.inputLabel} htmlFor="guided-search">
          Guided Search (coming soon)
        </InputLabel>
        <Input
          id="normal-search-box"
          inputProps={{ "aria-label": "search" }}
          endAdornment={
            <InputAdornment className={classes.searchIcon} position="end">
              <Search />
            </InputAdornment>
          }
        />
      </FormControl>
    </Grid>
  )
}
