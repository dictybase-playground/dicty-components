const withTM = require("next-transpile-modules")(["header"])

module.exports = withTM({
  reactStrictMode: false,
})
