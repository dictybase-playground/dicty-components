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

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Header: () => Header,
  headerStyles: () => headerStyles
});

// react-shim.js
var import_react = __toESM(require("react"));

// src/components/Header.tsx
var import_core8 = require("@material-ui/core");

// ../navbar/src/styles/customTheme.ts
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

// src/components/HeaderContainer.tsx
var import_core7 = require("@material-ui/core");

// src/styles/headerStyles.ts
var import_core2 = require("@material-ui/core");
var headerStyles = (0, import_core2.makeStyles)((theme) => ({
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
var import_core3 = require("@material-ui/core");
var LogoContainer = ({ home, logo, caption }) => {
  const classes = headerStyles();
  return /* @__PURE__ */ import_react.default.createElement(import_core3.Grid, {
    item: true,
    xs: 12,
    md: 3,
    lg: 4,
    className: classes.logoContainer
  }, /* @__PURE__ */ import_react.default.createElement(import_core3.Grid, {
    item: true,
    container: true,
    className: classes.left
  }, /* @__PURE__ */ import_react.default.createElement("a", {
    href: home ? home : "/"
  }, /* @__PURE__ */ import_react.default.createElement("img", {
    src: logo,
    alt: "dictyBase logo",
    className: classes.logo
  })), caption ? /* @__PURE__ */ import_react.default.createElement("div", {
    className: classes.dcr
  }, caption) : /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null)));
};

// src/components/LinksContainer.tsx
var import_core4 = require("@material-ui/core");

// src/components/Link.tsx
var Link = ({ url, text, icon }) => {
  const classes = headerStyles();
  return /* @__PURE__ */ import_react.default.createElement("div", {
    className: classes.linkButton
  }, /* @__PURE__ */ import_react.default.createElement("a", {
    href: url
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: classes.linkIconHolder
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: classes.linkIcon
  }, icon), /* @__PURE__ */ import_react.default.createElement("div", {
    className: classes.linkText
  }, text))));
};

// src/components/LinksContainer.tsx
var LinksContainer = ({ links }) => {
  const classes = headerStyles();
  return /* @__PURE__ */ import_react.default.createElement(import_core4.Grid, {
    item: true,
    container: true,
    justifyContent: "flex-end",
    xs: 12,
    md: 4,
    className: classes.linkContainer
  }, links.map((link, i) => /* @__PURE__ */ import_react.default.createElement(Link, __spreadProps(__spreadValues({}, link), {
    key: i
  }))));
};

// src/components/SearchContainer.tsx
var import_core6 = require("@material-ui/core");
var import_icons = require("@material-ui/icons");

// src/styles/searchStyles.ts
var import_core5 = require("@material-ui/core");
var searchStyles = (0, import_core5.makeStyles)((theme) => ({
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
  return /* @__PURE__ */ import_react.default.createElement(import_core6.Grid, {
    item: true,
    container: true,
    justifyContent: "center",
    xs: 12,
    md: 5,
    lg: 4
  }, /* @__PURE__ */ import_react.default.createElement(import_core6.FormControl, {
    className: classes.textField
  }, /* @__PURE__ */ import_react.default.createElement(import_core6.InputLabel, {
    className: classes.inputLabel,
    htmlFor: "guided-search"
  }, "Guided Search (coming soon)"), /* @__PURE__ */ import_react.default.createElement(import_core6.Input, {
    id: "normal-search-box",
    inputProps: { "aria-label": "search" },
    endAdornment: /* @__PURE__ */ import_react.default.createElement(import_core6.InputAdornment, {
      className: classes.searchIcon,
      position: "end"
    }, /* @__PURE__ */ import_react.default.createElement(import_icons.Search, null))
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
  return /* @__PURE__ */ import_react.default.createElement(import_core7.Grid, {
    className: classes.header,
    container: true,
    alignItems: "center"
  }, /* @__PURE__ */ import_react.default.createElement(LogoContainer, {
    home,
    logo,
    caption
  }), /* @__PURE__ */ import_react.default.createElement(SearchContainer, null), /* @__PURE__ */ import_react.default.createElement(LinksContainer, {
    links
  }));
};

// src/components/Header.tsx
var Header = (_a) => {
  var _b = _a, { theme } = _b, rest = __objRest(_b, ["theme"]);
  const customTheme = theme ? theme : muiTheme;
  return /* @__PURE__ */ import_react.default.createElement(import_core8.MuiThemeProvider, {
    theme: customTheme
  }, /* @__PURE__ */ import_react.default.createElement(HeaderContainer, __spreadValues({}, rest)));
};
module.exports = __toCommonJS(src_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Header,
  headerStyles
});
