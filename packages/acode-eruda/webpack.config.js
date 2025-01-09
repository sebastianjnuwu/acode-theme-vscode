import { exec } from "node:child_process";
import path from "node:path";

const build = (bash) => {
  bash.hooks.afterDone.tap("build", async () => {
    await exec("node .acode/build.js", (err, ok) => {
      if (!err) return console.log(ok);
    });
  });
};

const main = (env, options) => {
  return {
    target: "node",
    mode: options.mode || "production",
    entry: { main: "./src/main.js" },
    output: {
      path: path.resolve("./.acode", "build"),
      filename: "[name].js",
      chunkFilename: "[name].js",
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          use: [
            "html-tag-js/jsx/tag-loader.js",
            {
              loader: "babel-loader",
              options: {
                presets: ["@babel/preset-env"],
              },
            },
          ],
        },
      ],
    },
    plugins: [
      {
        apply: build,
      },
    ],
    stats: {
    all: false,
    errors: true,
    warnings: false,
  },
  }
};

export default main;