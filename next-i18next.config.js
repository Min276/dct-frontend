const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "my", "zh"],
    defaultLocale: "en",
    localeDetection: false,
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development'

};
