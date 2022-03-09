const withTM = require("next-transpile-modules")([
  "@dictyBase/navbar",
  "@dictyBase/header",
  "@dictyBase/footer",
  "@dictyBase/login-buttons",
  "@dictyBase/provider",
])

module.exports = withTM({
  reactStrictMode: false,
})
