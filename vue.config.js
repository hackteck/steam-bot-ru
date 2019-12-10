const fs = require("fs");
const path = require("path");
const crypto = require('crypto');

module.exports = {
    configureWebpack: {
        entry: "./src/entry-client.js",
        devServer: {
            //https: true
        }
    },
    outputDir: "docs",
    chainWebpack: config => {
        config.plugin('html').tap(config => {
            for (const arg of config) {
                arg.inject = false;
                arg.minify = false;
            }
            return config;
        })

        //ignore CSS errors (not worked)
        if (process.env.WEBPACK_DEV_SERVER == false) {
            config.plugin("extract-css").tap(config => {
                for (const arg of config) arg.ignoreOrder = true;
                return config;
            });
        }

        /* eslint-disable no-unreachable */
        return;
        //list of all images
        const images = [];
        config.module
            .rule('images')
            .use('url-loader')
            .loader('url-loader')
            .tap(config => {
                Object.assign(config.fallback.options, {
                    name(file) {
                        let hash = crypto.createHash('md5').update(fs.readFileSync(file)).digest("hex").substring(0, 8);
                        const { name, ext } = path.parse(file);
                        const hashed = `/img/${name}.${hash}${ext}`;
                        if (images.includes(hashed) == false) {
                            images.push(hashed);
                            fs.writeFileSync("./public/images.js", "var images = " + JSON.stringify(images, null, 4));
                        }
                        return 'img/[name].[hash:8].[ext]';
                    }
                })
                return config;
            })
    },
    productionSourceMap: false,
    runtimeCompiler: true,
    transpileDependencies: [/*"ansi-regex", "strip-ansi",*/ "vuetify"]
}