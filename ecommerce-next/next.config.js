const { withFrameworkConfig } = require("./framework/common/config");

/** @type {import('next').NextConfig} */
const nextConfig = withFrameworkConfig({
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["en-US", "es"],
    defaultLocale: ["en-US"]
  }
})

module.exports = nextConfig

console.log("next.config.js", JSON.stringify(module.exports, null, 2))
