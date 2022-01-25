const withTM = require("next-transpile-modules")(["navbar"]);

module.exports = withTM({
  reactStrictMode: true,
});
