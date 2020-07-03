const path = require("path");
const webpack = require('webpack');

function resolve(dir) {
    return path.join(__dirname, dir);
}
// 引入等比适配插件
const px2rem = require('postcss-px2rem')

// 配置基本大小
const postcss = px2rem({
    // 基准大小 baseSize，需要和rem.js中相同
    remUnit: 75,
    minPixelValue: 2 //设置要替换的最小像素值(3px会被转rem)。 默认 0
})

module.exports = {
    publicPath: './',
    // process.env.NODE_ENV === "production" ? "./" : "/",
    // webpack的相关配置
    configureWebpack: {
        entry: "./src/main.js",
        resolve: {
            extensions: [".js", ".vue", ".json", ".ts"],
            alias: {
                "@": resolve("src")
            }
        },
        module: {
            rules: [{
                test: /\.(html)(\?.*)?$/,
                use: "vue-html-loader"
            }]
        },
        //公共资源合并
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendor: {
                        chunks: "all",
                        test: /node_modules/,
                        name: "vendor",
                        minChunks: 1,
                        maxInitialRequests: 5,
                        minSize: 0,
                        priority: 100
                    },
                    common: {
                        chunks: "all",
                        test: /[\\/]src[\\/]js[\\/]/,
                        name: "common",
                        minChunks: 2,
                        maxInitialRequests: 5,
                        minSize: 0,
                        priority: 60
                    },
                    styles: {
                        name: "styles",
                        test: /\.(sa|sc|c)ss$/,
                        chunks: "all",
                        enforce: true
                    },
                    runtimeChunk: {
                        name: "manifest"
                    }
                }
            }
        },
        //性能警告修改
        performance: {
            hints: "warning",
            //入口起点的最大体积 整数类型（以字节为单位）
            maxEntrypointSize: 50000000,
            //生成文件的最大体积 整数类型（以字节为单位 300k）
            maxAssetSize: 30000000,
            //只给出 js 文件的性能提示
            assetFilter: function(assetFilename) {
                return assetFilename.endsWith(".js");
            }
        }
    },
    chainWebpack: config => {
        // 压缩图片
        config.entry('main').add('babel-polyfill') // main是入口js文件
        config.module
            .rule("images")
            .use("image-webpack-loader")
            .loader("image-webpack-loader")
            .options({
                bypassOnDebug: true
            })
            .end();
        // 分析插件
        // config
        //   .plugin("webpack-bundle-analyzer")
        //   .use(require("webpack-bundle-analyzer").BundleAnalyzerPlugin)
        //   .end();
        //引入jquery.
        config.plugin('provide').use(webpack.ProvidePlugin, [{
                $: 'jquery',
                jquery: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery'
            }])
            //html-wepack-plugin
        config.plugin('html').tap(args => {
            // args  https://cli.vuejs.org/zh/guide/webpack.html#%E4%BF%AE%E6%94%B9%E6%8F%92%E4%BB%B6%E9%80%89%E9%A1%B9
            // console.log(args);
            args[0].title = '111';
            return args;
        })
    },
    //打包输出路径
    outputDir: "dist/web",
    productionSourceMap: false,
    // 构建时开启多进程处理 babel 编译
    parallel: require("os").cpus().length > 1,
    css: {
        // 是否使用css分离插件 ExtractTextPlugin
        // extract: true,
        // 开启 CSS source maps?
        sourceMap: false,
        // css预设器配置项
        loaderOptions: {
            postcss: {
                plugins: [
                    postcss
                ]
            }
        },
        // 启用 CSS modules for all css / pre-processor files.
        requireModuleExtension: true
    },
    //开发服务器http代理
    devServer: {
        // host: "localhost",
        // https: false,
        // hotOnly: false,
        // proxy: {
        //   "/api": {
        //     target: "",  //47.107.150.65  183.66.178.70  http://47.107.150.65:3100/api
        //     changeOrigin: true, //是否跨域
        //     pathRewrite: {
        //       "^/api": "/"
        //     } //重写接口
        //   }
        // }
    },
    // 第三方插件配置
    pluginOptions: {

    },
    //关闭eslint检测
    lintOnSave: false
};