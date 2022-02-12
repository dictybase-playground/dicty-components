import { Header, headerDataLogin } from "header"
import logo from "header/src/images/logo.png"

export default function Docs() {
  return (
    <div>
      <Header logo={logo.src} links={headerDataLogin} />
    </div>
  )
}
