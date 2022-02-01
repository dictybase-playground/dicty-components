import { MuiThemeProvider, useMediaQuery } from "@material-ui/core"
import { NavbarProps, NavItem } from "navbar/src/types/index"
import { muiTheme } from "navbar/src/styles/customTheme"
import { DesktopNav } from "navbar/src/components/desktop/DesktopNav"
import { MobileNav } from "navbar/src/components/mobile/MobileNav"
import { navbarData } from "navbar/src/data/navbarData"
import { useEffect, useState } from "react"

export const Navbar = ({
  dataUrl,
  initialData,
  theme,
  isMobile,
}: NavbarProps) => {
  const customTheme = theme ? theme : muiTheme
  const mobileScreen = isMobile ? isMobile : useMediaQuery("(max-width: 768px)")

  // Fetch navbar data
  const [data, setData] = useState<NavItem[]>(initialData ? initialData : [])
  useEffect(() => {
    console.log("use effect called")
    const fetchData = async () => {
      try {
        const res = await fetch(dataUrl)
        const json = await res.json()
        setData(json.data)
      } catch (error) {
        setData(navbarData)
      }
    }

    fetchData()
  }, [setData, dataUrl, navbarData])

  return (
    <MuiThemeProvider theme={customTheme}>
      {mobileScreen ? <MobileNav items={data} /> : <DesktopNav items={data} />}
    </MuiThemeProvider>
  )
}
