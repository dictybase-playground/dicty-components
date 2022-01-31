import { Navbar } from "navbar"
import { data } from "navbar/src/data/navbarData"

export default function Docs() {
  return (
    <div>
      <Navbar items={data} />
    </div>
  )
}
