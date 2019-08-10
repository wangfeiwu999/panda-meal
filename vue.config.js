module.exports = {
	// 注:output选项是为构建及线网部署使用的,与本地环境关系不大。

	/**
	 * outputDir：构建文件在本地的输出目录，对应output.path,默认为"dist"。
	 * 前端部署：build构建完成后，将outputDir所指目录的全部文件打包、上传到线网环境的项目目录中，即完成前端部署。
	 * （以Tomcat为例，通常不会直接部署在域名根目录webapps中，而是新建一个项目子目录进行部署）。
	 * 注：开发时实时编译的文件并不在outputDir所指目录中，而是存在于内存中，有devServer访问。只要build输出的文件，才会存在于outputDir所指目录中。
	 */
	outputDir: "dist",

	/**
	 * publicPath就是output.publicPath，当项目部署在子路径时，对应url也要加上子路径才能正常访问，这个要增加的子路径就是publicPath。
	 * 所以publicPath是由部署路径决定的。部署路径决定了publicPath，进而决定了资源的访问路径。
	 * webpack默认我们是在域名根目录webapps部署项目，所以publicPath默认为"/"。
	 * 比如这里设置了publicPath: '/panda/'后，代码中所有资源引用在build时，都会自动在路径加上'/panda/'，
	 * 而页面的访问方式，也由http://localhost:8000/index.html变成了http://localhost:8000/panda/index.html
	 * 
	 */
	//publicPath: '/panda/',
	publicPath: '/',


	// 是否在每次保存的时候用eslint-loader检查代码
	lintOnSave: true,

	// 是否使用包含运行时编译器的Vue构建版本。设置为true后就可以在Vue组件中使用template
	runtimeCompiler: false,

	// 接收一个基于ChainableConfig 实例
	chainWebpack: (ChainableConfig) => {},

	// 接收被解析的配置作为参数
	configureWebpack: {
		resolve: {
			alias: {
				// dist目录下的是开发版本的vue,部署前需要改成生产版本
				vue$: 'vue/dist/vue.js'
			}
		}
	},

	// 生产环境是否生成 sourceMap 文件
	productionSourceMap: true,

	// css相关配置
	css: {
		// 是否使用css分离插件 ExtractTextPlugin,将组件中的 CSS 提取至一个独立的 CSS 文件中
		extract: false,

		// 是否为 CSS 开启 source map
		sourceMap: false,

		// 向 CSS 相关的 loader 传递选项
		loaderOptions: {},

		// 将所有的 *.(css|scss|sass|less|styl(us)?) 文件视为 CSS Modules 模块
		modules: false
	},

	// 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建
	parallel: require('os').cpus().length > 1,

	// PWA 插件相关配置
	// see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
	pwa: {},

	// webpack-dev-server 相关配置
	devServer: {
		/**
		 * 本地环境的项目根目录，然而好像并没有什么卵用，更改contentBase没什么效果
		 * 事实上的本地项目根目录就是public，所以data.json要放在pulic中才能访问到
		 */
		// contentBase:"public",
		
		/**
		 * 本地环境的publicPath，貌似也没什么卵用
		 * 经自测验证，devServer.publicPath为空时，会自动取output.publicPath，不为空的话则必须与output.publicPath相同，否则无法访问，所以这条配置没卵用。
		 * 经自测验证，网上devServer.publicPath会覆盖output.publicPath的说法是扯淡的，根本访问不了。
		 * 事实上也不建议devServer.publicPath和output.publicPath设成不同，因为要保持本地环境和线网环境的一致性
		 */
		//publicPath: '/panda/',
		publicPath: '/',
		
		open: process.platform === 'darwin',
		host: 'localhost',
		port: 8080,
		https: false,
		hotOnly: false,
		// proxy: "http://localhost:4000", // 设置代理
		before: app => {}
	},
	// 第三方插件配置
	pluginOptions: {}
}
