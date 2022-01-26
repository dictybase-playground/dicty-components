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
