var path = require("path");
var fs = require("fs");

module.exports = {
  mode: process.env.NODE_ENV || "none",
  entry: {
    app: path.resolve(__dirname, "src/app.js")
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "public")
  },
  resolve: { extensions: [".js", ".jsx", ".ts", ".tsx"] },
  optimization: {
    sideEffects: true
  },
  module: {
    // rules: [{ test: /\.js$/, loader: "source-map-loader", enforce: "pre" }]
  },
  devtool: process.env.NODE_ENV === "development" ? "source-map" : false,
  devServer: {
    disableHostCheck: true,
    contentBase: path.resolve("public"),
    publicPath: "",
    compress: true,
    host: "0.0.0.0",
    port: 28377
  }
};
