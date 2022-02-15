const withTM = require("next-transpile-modules")(["navbar", "header", "footer"])

module.exports = withTM({
  reactStrictMode: false,
})
