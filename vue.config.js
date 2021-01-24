module.exports = {
  devServer: {
    proxy: "http://localhost:8080",
  },
  outputDir: "/home/alola/Desktop/Soul-Arena/server/public/admin",
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Soul-Arena — Your #1 Box-Clicking Multiplayer Game";
      return args;
    });
  },
};
