const path = require(`path`);
const CracoLessPlugin = require("craco-less");

module.exports = {
  webpack: {
    alias: {
      "@components": path.resolve(__dirname, "./src/components"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@utils": path.resolve(__dirname, "./src/utils"),
      "@redux": path.resolve(__dirname, "./src/redux"),
      "@axios": path.resolve(__dirname, "./src/axios"),
      "@constants": path.resolve(__dirname, "./src/constants"),
    },
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
