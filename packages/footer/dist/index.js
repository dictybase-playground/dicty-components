var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Footer: () => Footer
});

// react-shim.js
var import_react = __toESM(require("react"));

// src/components/Footer.tsx
var import_core2 = require("@material-ui/core");

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

// src/components/FooterContainer.tsx
var FooterContainer = () => {
  return /* @__PURE__ */ import_react.default.createElement(import_react.default.Fragment, null);
};

// src/components/Footer.tsx
var Footer = ({ theme, links }) => {
  const customTheme = theme ? theme : muiTheme;
  return /* @__PURE__ */ import_react.default.createElement(import_core2.MuiThemeProvider, {
    theme: customTheme
  }, /* @__PURE__ */ import_react.default.createElement(FooterContainer, null));
};
module.exports = __toCommonJS(src_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Footer
});
