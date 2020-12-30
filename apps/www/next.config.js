// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");
const pathSrc = path.resolve(__dirname, "src");

const nextConfig = {
  env: {
    API_URL: process.env.BUILD_FOR_VERCEL ? "/api" : process.env.API_URL,
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  },
  webpack: config => {
    config.resolve.alias["@"] = pathSrc;

    return config;
  },
};

module.exports = nextConfig;
