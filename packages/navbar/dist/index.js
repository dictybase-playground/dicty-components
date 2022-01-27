var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
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
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// index.tsx
var navbar_exports = {};
__export(navbar_exports, {
  Navbar: () => Navbar
});

// components/Navbar.tsx
var import_core8 = require("@material-ui/core");

// styles/customTheme.ts
var import_core = require("@material-ui/core");
var primaryColor = "#004080";
var blueSecondaryColor = "#001b53";
var muiTheme = (0, import_core.createTheme)({
  palette: {
    primary: {
      main: primaryColor
    },
    secondary: {
      main: blueSecondaryColor
    }
  }
});

// styles/Navbar.tsx
var import_core2 = require("@material-ui/core");
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
var navbarStyles = (0, import_core2.makeStyles)((theme) => ({
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
    height: "inherit"
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
      "&$expanded": {
        margin: "auto"
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

// components/desktop/DesktopNavItem.tsx
var import_react = __toESM(require("react"));

// components/desktop/DesktopNavSubmenu.tsx
var import_core3 = require("@material-ui/core");
var DesktopNavSubmenu = ({
  open,
  subItems,
  anchorRef,
  handleClose
}) => {
  const styles = navbarStyles();
  return /* @__PURE__ */ React.createElement(import_core3.Popper, {
    open,
    anchorEl: anchorRef.current,
    transition: true,
    disablePortal: true,
    placement: "bottom-start"
  }, ({ TransitionProps }) => /* @__PURE__ */ React.createElement(import_core3.Grow, __spreadValues({}, TransitionProps), /* @__PURE__ */ React.createElement(import_core3.Paper, {
    elevation: 0,
    variant: "outlined",
    square: true
  }, /* @__PURE__ */ React.createElement(import_core3.ClickAwayListener, {
    onClickAway: handleClose
  }, /* @__PURE__ */ React.createElement(import_core3.MenuList, {
    autoFocusItem: open
  }, subItems.map(({ link, label }, i) => /* @__PURE__ */ React.createElement("a", {
    href: link
  }, /* @__PURE__ */ React.createElement(import_core3.MenuItem, {
    className: styles.desktopMenuItem,
    key: i
  }, label))))))));
};

// components/desktop/DesktopNavItem.tsx
var DesktopNavItem = ({ item }) => {
  const styles = navbarStyles();
  const [open, setOpen] = import_react.default.useState(false);
  const anchorRef = import_react.default.useRef(null);
  const handleToggle = () => {
    setOpen((prevOpen2) => !prevOpen2);
  };
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target))
      return;
    setOpen(false);
  };
  const prevOpen = import_react.default.useRef(open);
  import_react.default.useEffect(() => {
    if (prevOpen.current === true && open === false)
      anchorRef.current.focus();
    prevOpen.current = open;
  }, [open]);
  const caret = open ? styles.caretUp : styles.caretDown;
  const navItem = open ? `${styles.desktopNavItem} ${styles.focused}` : styles.desktopNavItem;
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: `${styles.desktopNavItemRoot} ${caret}`
  }, /* @__PURE__ */ import_react.default.createElement("li", {
    className: navItem,
    ref: anchorRef,
    "aria-controls": open ? "menu-list-grow" : void 0,
    "aria-haspopup": "true",
    onClick: handleToggle
  }, item.display), /* @__PURE__ */ import_react.default.createElement(DesktopNavSubmenu, {
    open,
    subItems: item.items,
    anchorRef,
    handleClose
  }));
};

// components/desktop/DesktopNav.tsx
var import_core4 = require("@material-ui/core");
var DesktopNav = ({ items }) => {
  const styles = navbarStyles();
  return /* @__PURE__ */ React.createElement(import_core4.Box, {
    className: styles.navbar
  }, /* @__PURE__ */ React.createElement("ul", {
    className: styles.desktopNavContainer
  }, items.map(({ attributes }, i) => /* @__PURE__ */ React.createElement(DesktopNavItem, {
    item: attributes,
    key: i
  }))));
};

// components/mobile/MobileNav.tsx
var import_core7 = require("@material-ui/core");
var import_react3 = require("react");

// components/mobile/MobileMenuButton.tsx
var MobileMenuButton = ({ open, setOpen }) => {
  const styles = navbarStyles();
  const hamburgerMenu = open ? `${styles.mobileMenuButton} ${styles.hamOpen}` : styles.mobileMenuButton;
  return /* @__PURE__ */ React.createElement("div", {
    className: styles.mobileMenuButtonContainer
  }, /* @__PURE__ */ React.createElement("div", {
    className: hamburgerMenu,
    onClick: () => setOpen(!open)
  }, /* @__PURE__ */ React.createElement("span", null), /* @__PURE__ */ React.createElement("span", null), /* @__PURE__ */ React.createElement("span", null)));
};

// components/mobile/MobileNavMenu.tsx
var import_react2 = require("react");

// components/mobile/MobileNavMenuitem.tsx
var import_core6 = require("@material-ui/core");

// components/mobile/MobileNavSubitem.tsx
var import_core5 = require("@material-ui/core");
var MobileNavSubitem = ({ item }) => {
  const styles = navbarStyles();
  return /* @__PURE__ */ React.createElement("a", {
    href: item.link
  }, /* @__PURE__ */ React.createElement(import_core5.ListItem, {
    button: true
  }, /* @__PURE__ */ React.createElement(import_core5.ListItemText, {
    className: styles.mobileNavSubItem,
    primary: item.label
  })));
};

// components/mobile/MobileNavMenuitem.tsx
var MobileNavMenuitem = ({
  expanded,
  cur,
  selectOption,
  item
}) => {
  const styles = navbarStyles();
  const selected = expanded === cur;
  return /* @__PURE__ */ React.createElement(import_core6.Accordion, {
    className: selected ? styles.mobileSelectedItem : "",
    expanded: selected,
    onChange: selectOption(cur),
    square: true
  }, /* @__PURE__ */ React.createElement(import_core6.AccordionSummary, {
    expandIcon: /* @__PURE__ */ React.createElement("div", {
      className: styles.mobileCaret
    })
  }, /* @__PURE__ */ React.createElement("b", null, item.display)), /* @__PURE__ */ React.createElement(import_core6.AccordionDetails, {
    className: styles.mobileNavContainer
  }, /* @__PURE__ */ React.createElement(import_core6.List, {
    className: styles.mobileNavContainer
  }, item.items.map((subItem, i) => /* @__PURE__ */ React.createElement(MobileNavSubitem, {
    item: subItem,
    key: i
  })))));
};

// components/mobile/MobileNavMenu.tsx
var MobileNavMenu = ({ items }) => {
  const [expanded, setExpanded] = (0, import_react2.useState)(false);
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
    item: attributes
  })));
};

// components/mobile/MobileNav.tsx
var import_react_slidedown = __toESM(require("react-slidedown"));
var MobileNav = ({ items }) => {
  const styles = navbarStyles();
  const [open, setOpen] = (0, import_react3.useState)(false);
  return /* @__PURE__ */ React.createElement(import_core7.Box, {
    className: styles.navbar
  }, /* @__PURE__ */ React.createElement(MobileMenuButton, {
    open,
    setOpen
  }), /* @__PURE__ */ React.createElement(import_react_slidedown.default, {
    className: styles.reactSlidedown
  }, open ? /* @__PURE__ */ React.createElement(MobileNavMenu, {
    items
  }) : null));
};

// components/Navbar.tsx
var Navbar = ({ items, theme }) => {
  const customTheme = theme ? theme : muiTheme;
  const mobileScreen = (0, import_core8.useMediaQuery)("(max-width: 768px)");
  return /* @__PURE__ */ React.createElement(import_core8.MuiThemeProvider, {
    theme: customTheme
  }, mobileScreen ? /* @__PURE__ */ React.createElement(MobileNav, {
    items
  }) : /* @__PURE__ */ React.createElement(DesktopNav, {
    items
  }));
};
module.exports = __toCommonJS(navbar_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Navbar
});
