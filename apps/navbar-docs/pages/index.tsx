import { Navbar } from "navbar"
import { navbarData } from "navbar/src/data/navbarData"

export default function Docs() {
  return (
    <div>
      <Navbar
        dataUrl="https://raw.githubusercontent.com/dictyBase/migration-data/master/navbar/navbar.json"
        initialData={navbarData}
      />
    </div>
  )
}
