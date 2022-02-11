const withTM = require("next-transpile-modules")(["footer"])

module.exports = withTM({
  reactStrictMode: false,
})
