const path = require("path");

module.exports = {
  presets: ["@babel/preset-env"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          "@": path.resolve(`${process.cwd()}/src`),
        },
      },
    ],
  ],
};
