// const { defineConfig } = require("@vue/cli-service");
// module.exports = defineConfig({
//   transpileDependencies: true,
//   // eslint-disable-next-line
//   /*eslint-disable */
//   lintOnSave: false,
// });

// vue.config.js
module.exports = {
  chainWebpack: (config) => {
    config.resolve.alias.set("vue", "@vue/compat");
    // eslint-disable-next-line
    /*eslint-disable */
    lintOnSave: false;
    config.module
      .rule("vue")
      .use("vue-loader")
      .tap((options) => {
        return {
          ...options,
          compilerOptions: {
            compatConfig: {
              MODE: 2,
            },
          },
        };
      });
  },
};
