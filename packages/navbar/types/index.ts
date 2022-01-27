import { Theme } from "@material-ui/core";
import { Dispatch, SetStateAction } from "react";

export interface NavItem {
  type: string;
  id: string;
  attributes: {
    display: string;
    items: Array<SubNavItem>;
  };
}

export interface SubNavItem {
  label: string;
  link: string;
}

/**
 * Component props
 */
export interface NavbarProps {
  items: Array<NavItem>;
  theme?: Partial<Theme>;
  brand?: any;
}

export interface DesktopNavProps {
  items: Array<NavItem>;
}

export interface DesktopNavItemProps {
  item: NavItem["attributes"];
}

export interface DesktopNavSubmenuProps {
  open: boolean;
  subItems: Array<SubNavItem>;
  anchorRef: React.MutableRefObject<any>;
  handleClose: (event: React.MouseEvent<EventTarget>) => void;
}

export interface MobileMenuButtonProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export interface DesktopNavProps {
  items: Array<NavItem>;
}

export interface MobileNavItemProps {
  expanded: number | false;
  cur: number;
  selectOption: (
    panel: number
  ) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => void;
  item: NavItem["attributes"];
}

export interface MobileNavMenuProps {
  open: boolean;
  items: Array<NavItem>;
}
