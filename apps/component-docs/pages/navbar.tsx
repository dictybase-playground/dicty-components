import { Navbar, navbarData } from "navbar"

export default function NavbarPage() {
  return (
    <Navbar
      dataUrl="https://raw.githubusercontent.com/dictyBase/migration-data/master/navbar/navbar.json"
      initialData={navbarData}
    />
  )
}
