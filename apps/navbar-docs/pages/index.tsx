import { Navbar, navbarData } from "navbar"

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
