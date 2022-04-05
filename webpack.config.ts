import webpack, { Configuration } from "webpack";
import path from "path";
import HtmlWebpackPlugin from "html-webpack-plugin";
import devServer from "webpack-dev-server";

type Config = Configuration & {
  devServer: devServer.Configuration;
};

const config: Config = {
  mode: "production",
  entry: "./src/index.ts",
  devServer: {
    port: 3000,
    static: {
      directory: "./",
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({ template: "./index.html", filename: "index.html" }),
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "index.js",
  },
};

export default config;
