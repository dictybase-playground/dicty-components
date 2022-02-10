import { HeaderLink } from "header/src/types"

export const Link = ({ url, text, icon }: HeaderLink) => {
  return (
    <div style={{ padding: "15px" }}>
      <a href={url}>
        <div style={{ textAlign: "center" }}>
          {icon}
          <br />
          {text}
        </div>
      </a>
    </div>
  )
}
