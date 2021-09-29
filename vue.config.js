module.exports = {
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/vue-weather-app-one-call-api"
      : "/",
  pages: {
    index: {
      entry: "src/main.js",
      template: "public/index.html",
      filename: "index.html",
      title: "Vuejs - Weather app one call API",
      chunks: ["chunk-vendors", "chunk-common", "index"],
    },
  },
};
