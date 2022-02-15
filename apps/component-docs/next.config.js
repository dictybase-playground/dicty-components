const withTM = require("next-transpile-modules")(["navbar", "header"])

module.exports = withTM({
  reactStrictMode: false,
})
