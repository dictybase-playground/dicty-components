import { HeaderLinkProps } from "@dictyBase/header/src/types"
import { headerStyles } from "@dictyBase/header/src/styles/headerStyles"

export const HeaderLink = ({ url, text, icon }: HeaderLinkProps) => {
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
