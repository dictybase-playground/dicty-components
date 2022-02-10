import { HeaderLink } from "header/src/types"
import { headerStyles } from "header/src/styles/headerStyles"

export const Link = ({ url, text, icon }: HeaderLink) => {
  const classes = headerStyles()

  return (
    <div className={classes.linkButton}>
      <a href={url}>
        <div className={classes.linkIconHolder}>
          <div className={classes.linkIcon}>{icon}</div>
          <div className={classes.linkText}>{text}</div>
        </div>
      </a>
    </div>
  )
}
