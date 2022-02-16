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
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// react-shim.js
import React from "react";

// src/components/Header.tsx
import { MuiThemeProvider } from "@material-ui/core";

// ../navbar/src/styles/customTheme.ts
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

// src/components/HeaderContainer.tsx
import { Grid as Grid4 } from "@material-ui/core";

// src/styles/headerStyles.ts
import { makeStyles } from "@material-ui/core";
var headerStyles = makeStyles((theme) => ({
  header: {
    fontFamily: theme.typography.fontFamily,
    backgroundColor: theme.palette.common.white
  },
  logoContainer: {
    paddingBottom: "0px",
    [theme.breakpoints.down("md")]: {
      display: "flex",
      justifyContent: "center",
      textAlign: "center"
    }
  },
  dcr: {
    fontWeight: 400,
    fontSize: "1.1em",
    color: theme.palette.primary.main,
    display: "flex",
    alignItems: "center",
    paddingTop: theme.spacing(3),
    [theme.breakpoints.only("md")]: { paddingLeft: theme.spacing(2) },
    [theme.breakpoints.down("md")]: {
      paddingTop: "0px",
      paddingBottom: theme.spacing(0.5)
    },
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center"
    },
    fontStyle: "italic"
  },
  left: {
    [theme.breakpoints.down("sm")]: {
      display: "inline-block"
    },
    [theme.breakpoints.only("md")]: {
      display: "inline-block",
      textAlign: "left"
    }
  },
  logo: {
    maxWidth: "180px",
    padding: theme.spacing(1.5)
  },
  linkContainer: {
    paddingBottom: "0px",
    fontSize: "0.8em",
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
      marginTop: theme.spacing(2)
    },
    "& a": {
      color: theme.palette.text.primary,
      textDecoration: "none",
      "&:hover": {
        color: theme.palette.secondary.main
      }
    }
  },
  linkButton: {
    padding: "15px",
    "& a": {
      color: theme.palette.primary.main,
      "&&:hover": {
        color: theme.palette.primary.dark
      }
    }
  },
  linkIconHolder: {
    textAlign: "center"
  },
  linkIcon: {
    marginBottom: "2px"
  },
  linkText: {}
}));

// src/components/LogoContainer.tsx
import { Grid } from "@material-ui/core";
var LogoContainer = ({ home, logo, caption }) => {
  const classes = headerStyles();
  return /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    xs: 12,
    md: 3,
    lg: 4,
    className: classes.logoContainer
  }, /* @__PURE__ */ React.createElement(Grid, {
    item: true,
    container: true,
    className: classes.left
  }, /* @__PURE__ */ React.createElement("a", {
    href: home ? home : "/"
  }, /* @__PURE__ */ React.createElement("img", {
    src: logo,
    alt: "dictyBase logo",
    className: classes.logo
  })), caption ? /* @__PURE__ */ React.createElement("div", {
    className: classes.dcr
  }, caption) : /* @__PURE__ */ React.createElement(React.Fragment, null)));
};

// src/components/LinksContainer.tsx
import { Grid as Grid2 } from "@material-ui/core";

// src/components/Link.tsx
var Link = ({ url, text, icon }) => {
  const classes = headerStyles();
  return /* @__PURE__ */ React.createElement("div", {
    className: classes.linkButton
  }, /* @__PURE__ */ React.createElement("a", {
    href: url
  }, /* @__PURE__ */ React.createElement("div", {
    className: classes.linkIconHolder
  }, /* @__PURE__ */ React.createElement("div", {
    className: classes.linkIcon
  }, icon), /* @__PURE__ */ React.createElement("div", {
    className: classes.linkText
  }, text))));
};

// src/components/LinksContainer.tsx
var LinksContainer = ({ links }) => {
  const classes = headerStyles();
  return /* @__PURE__ */ React.createElement(Grid2, {
    item: true,
    container: true,
    justifyContent: "flex-end",
    xs: 12,
    md: 4,
    className: classes.linkContainer
  }, links.map((link, i) => /* @__PURE__ */ React.createElement(Link, __spreadProps(__spreadValues({}, link), {
    key: i
  }))));
};

// src/components/SearchContainer.tsx
import {
  FormControl,
  Grid as Grid3,
  Input,
  InputAdornment,
  InputLabel
} from "@material-ui/core";
import { Search } from "@material-ui/icons";

// src/styles/searchStyles.ts
import { makeStyles as makeStyles2 } from "@material-ui/core";
var searchStyles = makeStyles2((theme) => ({
  textField: {
    paddingBottom: "0px",
    [theme.breakpoints.down("md")]: {
      marginTop: "0px"
    }
  },
  searchIcon: {
    color: theme.palette.primary.main
  },
  inputLabel: {
    fontSize: "0.8em"
  }
}));

// src/components/SearchContainer.tsx
var SearchContainer = () => {
  const classes = searchStyles();
  return /* @__PURE__ */ React.createElement(Grid3, {
    item: true,
    container: true,
    justifyContent: "center",
    xs: 12,
    md: 5,
    lg: 4
  }, /* @__PURE__ */ React.createElement(FormControl, {
    className: classes.textField
  }, /* @__PURE__ */ React.createElement(InputLabel, {
    className: classes.inputLabel,
    htmlFor: "guided-search"
  }, "Guided Search (coming soon)"), /* @__PURE__ */ React.createElement(Input, {
    id: "normal-search-box",
    inputProps: { "aria-label": "search" },
    endAdornment: /* @__PURE__ */ React.createElement(InputAdornment, {
      className: classes.searchIcon,
      position: "end"
    }, /* @__PURE__ */ React.createElement(Search, null))
  })));
};

// src/components/HeaderContainer.tsx
var HeaderContainer = ({
  home,
  logo,
  links,
  caption
}) => {
  const classes = headerStyles();
  return /* @__PURE__ */ React.createElement(Grid4, {
    className: classes.header,
    container: true,
    alignItems: "center"
  }, /* @__PURE__ */ React.createElement(LogoContainer, {
    home,
    logo,
    caption
  }), /* @__PURE__ */ React.createElement(SearchContainer, null), /* @__PURE__ */ React.createElement(LinksContainer, {
    links
  }));
};

// src/components/Header.tsx
var Header = (_a) => {
  var _b = _a, { theme } = _b, rest = __objRest(_b, ["theme"]);
  const customTheme = theme ? theme : muiTheme;
  return /* @__PURE__ */ React.createElement(MuiThemeProvider, {
    theme: customTheme
  }, /* @__PURE__ */ React.createElement(HeaderContainer, __spreadValues({}, rest)));
};
export {
  Header,
  headerStyles
};
