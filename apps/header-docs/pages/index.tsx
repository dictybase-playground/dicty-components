import { Header } from "header"
import logo from "header/src/images/logo.png"

export default function Docs() {
  return (
    <div>
      <Header
        items={[]}
        render={() => {
          return <></>
        }}
        logo={logo.src}
      />
    </div>
  )
}
