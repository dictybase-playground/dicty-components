const withTM = require("next-transpile-modules")([
  "@dictyBase/navbar",
  "@dictyBase/header",
  "@dictyBase/footer",
  "@dictyBase/login-buttons",
])

module.exports = withTM({
  reactStrictMode: false,
})
