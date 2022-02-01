var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));

// react-shim.js
import React from "react";

// src/components/Navbar.tsx
import { MuiThemeProvider, useMediaQuery } from "@material-ui/core";

// src/styles/customTheme.ts
import { createTheme } from "@material-ui/core";
var primaryColor = "#004080";
var blueSecondaryColor = "#001b53";
var muiTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor
    },
    secondary: {
      main: blueSecondaryColor
    }
  }
});

// src/styles/navbarStyles.ts
import { makeStyles } from "@material-ui/core";
var navHeight = "50px";
var stdTransition = "0.2s all ease-in-out";
var caretBase = {
  content: "''",
  width: "0px",
  height: "0px",
  position: "absolute",
  top: "0",
  bottom: "0",
  margin: "auto"
};
var navbarStyles = makeStyles((theme) => ({
  navbar: {
    background: theme.palette.primary.main,
    color: "#fff",
    fontFamily: theme.typography.fontFamily,
    height: navHeight,
    "&& a": {
      textDecoration: "none",
      color: theme.palette.primary.main
    }
  },
  desktopNavMenu: {
    borderColor: theme.palette.primary.main,
    borderTop: "0px",
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.2)"
  },
  desktopNavContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    listStyle: "none",
    height: navHeight,
    margin: "0px",
    padding: "0px"
  },
  desktopNavItemRoot: {
    display: "flex",
    height: "inherit",
    cursor: "pointer",
    marginRight: "5px"
  },
  desktopNavItem: {
    height: "inherit",
    padding: "0px 20px 0px 10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    cursor: "pointer",
    transition: stdTransition,
    "&&:hover, &&:focus, &&:active": {
      background: theme.palette.secondary.main,
      transition: stdTransition
    }
  },
  desktopMenuItem: {
    "&&:hover": {
      color: "#fff",
      background: theme.palette.primary.main,
      transition: stdTransition
    }
  },
  mobileMenuButtonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: navHeight
  },
  mobileMenuButton: {
    height: "15px",
    width: "20px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexDirection: "column",
    cursor: "pointer",
    position: "relative",
    "&& > span": {
      height: "2px",
      transition: stdTransition,
      background: "#fff",
      display: "block",
      width: "100%",
      transform: "rotate(0deg)"
    }
  },
  hamOpen: {
    "&& :nth-child(1)": {
      transform: "rotate(45deg)",
      position: "absolute",
      top: "50%"
    },
    "&& :nth-child(2)": {
      position: "absolute",
      top: "50%",
      opacity: "0"
    },
    "&& :nth-child(3)": {
      transform: "rotate(-45deg)",
      position: "absolute",
      top: "50%"
    }
  },
  mobileMenuContainer: {
    background: theme.palette.primary.main,
    transition: stdTransition,
    "&& > div": {
      background: theme.palette.primary.main,
      color: "#fff",
      boxShadow: "none",
      "&:not(:last-child)": {
        borderBottom: 0
      },
      "&:before": {
        display: "none"
      },
      transition: stdTransition
    },
    "&& a": {
      color: "#fff!important"
    }
  },
  reactSlidedown: {
    height: "0",
    transition: stdTransition,
    "&&.transitioning": {
      overflowY: "hidden"
    },
    "&&.closed": {
      display: "none"
    }
  },
  mobileCaret: {
    width: "24px",
    height: "24px",
    display: "relative",
    "&&:after": __spreadProps(__spreadValues({}, caretBase), {
      borderTop: "5px solid #fff",
      borderLeft: "5px solid transparent",
      borderRight: "5px solid transparent",
      right: 0,
      left: 0
    })
  },
  mobileNavContainer: {
    width: "100%",
    padding: "0px"
  },
  mobileSelectedItem: {
    background: `${theme.palette.primary.dark}!important`
  },
  mobileNavSubItem: {
    paddingLeft: "25px"
  },
  focused: {
    background: theme.palette.secondary.main
  },
  caretDown: {
    position: "relative",
    "&&:after": __spreadProps(__spreadValues({}, caretBase), {
      borderTop: "5px solid #fff",
      borderLeft: "5px solid transparent",
      borderRight: "5px solid transparent",
      right: "4px"
    })
  },
  caretUp: {
    position: "relative",
    "&&:after": __spreadProps(__spreadValues({}, caretBase), {
      borderBottom: "5px solid #fff",
      borderLeft: "5px solid transparent",
      borderRight: "5px solid transparent",
      right: "4px"
    })
  }
}));

// src/components/desktop/DesktopNavItem.tsx
import React2 from "react";

// src/components/desktop/DesktopNavSubmenu.tsx
import { Popper } from "@material-ui/core";

// src/components/desktop/CustomMenu.tsx
import { ClickAwayListener, Grow, MenuList, Paper } from "@material-ui/core";

// src/components/desktop/DesktopNavSubitem.tsx
import { MenuItem } from "@material-ui/core";
var DesktopNavSubitem = ({ item }) => {
  const styles = navbarStyles();
  return /* @__PURE__ */ React.createElement("a", {
    href: item.link
  }, /* @__PURE__ */ React.createElement(MenuItem, {
    className: styles.desktopMenuItem
  }, item.label));
};

// src/components/desktop/CustomMenu.tsx
var CustomMenu = ({
  subItems,
  handleClose,
  TransitionProps
}) => {
  const styles = navbarStyles();
  return /* @__PURE__ */ React.createElement(Grow, __spreadValues({}, TransitionProps), /* @__PURE__ */ React.createElement(Paper, {
    className: styles.desktopNavMenu,
    variant: "outlined",
    square: true
  }, /* @__PURE__ */ React.createElement(ClickAwayListener, {
    onClickAway: handleClose
  }, /* @__PURE__ */ React.createElement(MenuList, null, subItems.map((subItem, i) => /* @__PURE__ */ React.createElement(DesktopNavSubitem, {
    item: subItem,
    key: i
  }))))));
};

// src/components/desktop/DesktopNavSubmenu.tsx
var DesktopNavSubmenu = ({
  open,
  anchorRef,
  handleClose,
  subItems
}) => /* @__PURE__ */ React.createElement(Popper, {
  open,
  anchorEl: anchorRef.current,
  transition: true,
  disablePortal: true,
  placement: "bottom-start"
}, ({ TransitionProps }) => /* @__PURE__ */ React.createElement(CustomMenu, {
  handleClose,
  subItems,
  TransitionProps
}));

// src/components/desktop/DesktopNavItem.tsx
var DesktopNavItem = ({ item }) => {
  const styles = navbarStyles();
  const [open, setOpen] = React2.useState(false);
  const anchorRef = React2.useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen2) => !prevOpen2);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target))
      return;
    setOpen(false);
  };
  const prevOpen = React2.useRef(open);
  React2.useEffect(() => {
    if (prevOpen.current === true && open === false)
      anchorRef.current.focus();
    prevOpen.current = open;
  }, [open]);
  const caret = open ? styles.caretUp : styles.caretDown;
  const navItem = open ? `${styles.desktopNavItem} ${styles.focused}` : styles.desktopNavItem;
  return /* @__PURE__ */ React2.createElement("div", {
    className: `${styles.desktopNavItemRoot} ${caret}`,
    onClick: handleToggle
  }, /* @__PURE__ */ React2.createElement("li", {
    className: navItem,
    ref: anchorRef,
    "aria-controls": open ? "menu-list-grow" : void 0,
    "aria-haspopup": "true"
  }, item.display), /* @__PURE__ */ React2.createElement(DesktopNavSubmenu, {
    open,
    subItems: item.items,
    anchorRef,
    handleClose
  }));
};

// src/components/desktop/DesktopNav.tsx
import { Box } from "@material-ui/core";
var DesktopNav = ({ items }) => {
  const styles = navbarStyles();
  return /* @__PURE__ */ React.createElement(Box, {
    className: styles.navbar
  }, /* @__PURE__ */ React.createElement("ul", {
    className: styles.desktopNavContainer
  }, items.map(({ attributes }, i) => /* @__PURE__ */ React.createElement(DesktopNavItem, {
    item: attributes,
    key: i
  }))));
};

// src/components/mobile/MobileNav.tsx
import { Box as Box2 } from "@material-ui/core";
import { useState as useState2 } from "react";

// src/components/mobile/MobileMenuButton.tsx
var MobileMenuButton = ({ open, setOpen }) => {
  const styles = navbarStyles();
  const hamburgerMenu = open ? `${styles.mobileMenuButton} ${styles.hamOpen}` : styles.mobileMenuButton;
  return /* @__PURE__ */ React.createElement("div", {
    className: styles.mobileMenuButtonContainer
  }, /* @__PURE__ */ React.createElement("div", {
    className: hamburgerMenu,
    onClick: () => setOpen(!open),
    role: "mobile-nav-button"
  }, /* @__PURE__ */ React.createElement("span", null), /* @__PURE__ */ React.createElement("span", null), /* @__PURE__ */ React.createElement("span", null)));
};

// src/components/mobile/MobileNavMenu.tsx
import { useState } from "react";

// src/components/mobile/MobileNavMenuitem.tsx
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List
} from "@material-ui/core";

// src/components/mobile/MobileNavSubitem.tsx
import { ListItem, ListItemText } from "@material-ui/core";
var MobileNavSubitem = ({ item }) => {
  const styles = navbarStyles();
  return /* @__PURE__ */ React.createElement("a", {
    href: item.link
  }, /* @__PURE__ */ React.createElement(ListItem, {
    button: true
  }, /* @__PURE__ */ React.createElement(ListItemText, {
    className: styles.mobileNavSubItem,
    primary: item.label
  })));
};

// src/components/mobile/MobileNavMenuitem.tsx
var MobileNavMenuitem = ({
  expanded,
  cur,
  selectOption,
  item
}) => {
  const styles = navbarStyles();
  const selected = expanded === cur;
  return /* @__PURE__ */ React.createElement(Accordion, {
    className: selected ? styles.mobileSelectedItem : "",
    expanded: selected,
    onChange: selectOption(cur),
    square: true
  }, /* @__PURE__ */ React.createElement(AccordionSummary, {
    expandIcon: /* @__PURE__ */ React.createElement("div", {
      className: styles.mobileCaret
    })
  }, /* @__PURE__ */ React.createElement("b", null, item.display)), /* @__PURE__ */ React.createElement(AccordionDetails, {
    className: styles.mobileNavContainer
  }, /* @__PURE__ */ React.createElement(List, {
    className: styles.mobileNavContainer
  }, item.items.map((subItem, i) => /* @__PURE__ */ React.createElement(MobileNavSubitem, {
    item: subItem,
    key: i
  })))));
};

// src/components/mobile/MobileNavMenu.tsx
var MobileNavMenu = ({ items }) => {
  const [expanded, setExpanded] = useState(false);
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  const styles = navbarStyles();
  return /* @__PURE__ */ React.createElement("div", {
    className: styles.mobileMenuContainer
  }, items.map(({ attributes }, i) => /* @__PURE__ */ React.createElement(MobileNavMenuitem, {
    expanded,
    cur: i,
    selectOption: handleChange,
    item: attributes,
    key: i
  })));
};

// src/components/mobile/MobileNav.tsx
import SlideDown from "react-slidedown";
var MobileNav = ({ items }) => {
  const styles = navbarStyles();
  const [open, setOpen] = useState2(false);
  return /* @__PURE__ */ React.createElement(Box2, {
    className: styles.navbar
  }, /* @__PURE__ */ React.createElement(MobileMenuButton, {
    open,
    setOpen
  }), /* @__PURE__ */ React.createElement(SlideDown, {
    className: styles.reactSlidedown
  }, open ? /* @__PURE__ */ React.createElement(MobileNavMenu, {
    items
  }) : null));
};

// src/data/navbarData.ts
var navbarData = [
  {
    type: "genomes",
    id: "1",
    attributes: {
      display: "Genomes",
      items: [
        {
          label: "Dictyostelium discoideum AX4",
          link: "/"
        },
        {
          label: "Dictyostelium purpureum AX1",
          link: "http://genomes.dictybase.org/purpureum"
        },
        {
          label: "Dictyostelium fasciculatum SH3",
          link: "http://genomes.dictybase.org/fasciculatum"
        },
        {
          label: "Polysphondylium pallidum PN500",
          link: "http://genomes.dictybase.org/pallidum"
        }
      ]
    }
  },
  {
    type: "tools",
    id: "2",
    attributes: {
      display: "Tools",
      items: [
        {
          label: "Genome Browser",
          link: "http://dictybase.org/tools/jbrowse/?data=data/jbrowse/discoideum&loc=6:1..50011&tracks=reference,gene,transcript"
        },
        {
          label: "DictyAccess",
          link: "/dictyaccess"
        }
      ]
    }
  },
  {
    type: "explore",
    id: "3",
    attributes: {
      display: "Explore",
      items: [
        {
          label: "Dicty Art",
          link: "/explore/art"
        },
        {
          label: "Gallery",
          link: "/explore/gallery"
        },
        {
          label: "Learn About Dicty",
          link: "/explore/learn"
        },
        {
          label: "Teaching Protocols",
          link: "/explore/teach"
        },
        {
          label: "Useful Links",
          link: "/explore/links"
        }
      ]
    }
  },
  {
    type: "research",
    id: "4",
    attributes: {
      display: "Research",
      items: [
        {
          label: "Techniques",
          link: "/research/techniques"
        },
        {
          label: "Anatomy Ontology",
          link: "/research/ontology"
        },
        {
          label: "Codon Bias Table",
          link: "/research/codon"
        },
        {
          label: "Nomenclature Guidelines",
          link: "/research/nomenclature"
        },
        {
          label: "Phenotyping",
          link: "/research/phenotype"
        },
        {
          label: "Axenic Strain History",
          link: "/research/strain-history"
        }
      ]
    }
  },
  {
    type: "dsc",
    id: "5",
    attributes: {
      display: "Dicty Stock Center",
      items: [
        {
          label: "Stock Center Home",
          link: "/stockcenter"
        },
        {
          label: "Strain Catalog",
          link: "/stockcenter/strains"
        },
        {
          label: "Plasmid Catalog",
          link: "/stockcenter/plasmids"
        },
        {
          label: "Order Information",
          link: "/stockcenter/information/order"
        },
        {
          label: "Deposit Information",
          link: "/stockcenter/information/deposit"
        },
        {
          label: "Payment Information",
          link: "/stockcenter/information/payment"
        },
        {
          label: "FAQ",
          link: "/stockcenter/information/faq"
        },
        {
          label: "Standard Operating Procedures",
          link: "https://northwestern.box.com/s/p0f8m70whgiuib2u0wt8gtn497ncmq8i"
        }
      ]
    }
  },
  {
    type: "community",
    id: "6",
    attributes: {
      display: "Community",
      items: [
        {
          label: "Cite Us",
          link: "/community/citation"
        },
        {
          label: "Dicty Annual Conferences",
          link: "/community/conference"
        },
        {
          label: "Dicty Email Forum",
          link: "/community/listserv"
        },
        {
          label: "Dicty Labs",
          link: "/community/labs"
        },
        {
          label: "History",
          link: "/community/history"
        },
        {
          label: "Jobs",
          link: "/community/jobs"
        },
        {
          label: "Community Annotations",
          link: "/community/annotations"
        }
      ]
    }
  }
];

// src/components/Navbar.tsx
import { useEffect, useState as useState3 } from "react";
var Navbar = ({
  dataUrl,
  initialData,
  theme,
  isMobile
}) => {
  const customTheme = theme ? theme : muiTheme;
  const mobileScreen = isMobile ? isMobile : useMediaQuery("(max-width: 768px)");
  const [data, setData] = useState3(initialData ? initialData : []);
  useEffect(() => {
    console.log("use effect called");
    const fetchData = async () => {
      try {
        const res = await fetch(dataUrl);
        const json = await res.json();
        setData(json.data);
      } catch (error) {
        setData(navbarData);
      }
    };
    fetchData();
  }, [setData, dataUrl, navbarData]);
  return /* @__PURE__ */ React.createElement(MuiThemeProvider, {
    theme: customTheme
  }, mobileScreen ? /* @__PURE__ */ React.createElement(MobileNav, {
    items: data
  }) : /* @__PURE__ */ React.createElement(DesktopNav, {
    items: data
  }));
};
export {
  Navbar
};
