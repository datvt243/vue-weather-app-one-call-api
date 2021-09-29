module.exports = {
  publicPath:
    process.env.NODE_ENV === "production" ? "/vue-base-template" : "/",
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Vuejs - Event list with Firebase",
      chunks: ["chunk-vendors", "chunk-common", "index"]
    },
  },
};
