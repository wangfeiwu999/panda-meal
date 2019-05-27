module.exports = {
 // publicPath就是output.publicPath，在应用被部署到非根目录上时需要
 // publicPath: '/',

 // 输出文件目录，就是output.path
 // outputDir: 'dist',

 // 是否在每次保存的时候用eslint-loader检查代码
 // lintOnSave: true,

 // 是否使用包含运行时编译器的Vue构建版本。设置为true后就可以在Vue组件中使用template
// runtimeCompiler: false,

 //接收一个基于ChainableConfig 实例
 // chainWebpack: (ChainableConfig) => {},

 // 接收被解析的配置作为参数
 // configureWebpack: (config) => {},

 // 生产环境是否生成 sourceMap 文件
 // productionSourceMap: true,

 // css相关配置
 // css: {
	  // 是否使用css分离插件 ExtractTextPlugin,将组件中的 CSS 提取至一个独立的 CSS 文件中
	  // extract: false,

	  // 是否为 CSS 开启 source map
	  // sourceMap: false,

	  // 向 CSS 相关的 loader 传递选项
	  // loaderOptions: {},/\

	  // 将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块
	  // modules: false
 // },

 // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建
 // parallel: require('os').cpus().length > 1,

 // PWA 插件相关配置
 // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
 // pwa: {},

 // webpack-dev-server 相关配置
 devServer: {
	  // open: process.platform === 'darwin',
	  // host: '0.0.0.0',
	  // port: 8080,
	  // https: false,
	  // hotOnly: false,
	  proxy: "http://localhost:4000", // 设置代理
	  // before: app => {}
 },
 // 第三方插件配置
 // pluginOptions: {}
}