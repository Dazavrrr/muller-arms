const path = require("path");

const svgr = require("@svgr/webpack");

module.exports = {
  module: {
    rules: [
      {
        test: /\.svg$/,
        use: [
          svgr({
            svgo: {
              plugins: [
                {
                  name: "removeViewBox",
                },
              ],
            },
          }),
        ],
      },
    ],
  },
};
