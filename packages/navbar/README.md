# @dictyBase/navbar

navbar Component library for dictyBase. This component works on both mobile and desktop screens.

<p align="center">
    <img src="resources/navbar-desktop-preview.png" />
    <small><i>dictyBase navbar component with default data, on a desktop screen</i></small>
</p>

<p align="center">
    <img src="resources/navbar-mobile-preview.png" />
    <small><i>dictyBase navbar component with default data, on a mobile screen</i></small>
</p>

## Component architecture

```mermaid
graph TD
    A{Navbar} --> B[DesktopNav]
    B --> B1[DesktopNavItem]
    B1 --> B2[DesktopNavSubmenu]
    B2 --> B3[CustomMenu]
    B3 --> B4[DesktopNavSubitem]
    A --> C[MobileNav]
    C --> C1[MobileMenuButton]
    C --> C2[MobileNavMenu]
    C2 --> C3[MobileNavMenuItem]
    C3 --> C4[MobileNavSubitem]
```
