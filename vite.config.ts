import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";
import vueJsx from '@vitejs/plugin-vue2-jsx'
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // Vue2单文件组件支持
    vue(),
    // Vue2 支持jsx tsx
    vueJsx({
      // options are passed on to @vue/babel-preset-jsx
    }),
    // 为生产构建提供传统浏览器支持。
    legacy({
      targets: ["defaults"],
    }),
  ],
  // 静态资源服务的文件夹
  publicDir: "public",
  base: "./",
  resolve: {
		// 配置路径别名
		alias: {
			'@': '/src',
		},
    extensions:['.mjs','.js','.ts','.jsx','.tsx','.vue']
	},
  //静态资源处理
  assetsInclude: "",
  //控制台输出的级别 info 、warn、error、silent
  logLevel: "info",
  // 设为false 可以避免 vite 清屏而错过在终端中打印某些关键信息
  clearScreen: true,
  // resolve: {
  //   alias: [//配置别名
  //     { find: '@', replacement: resolve(__dirname, 'src') }
  //   ],
  //   // 情景导出 package.json 配置中的exports字段
  //   conditions: [],
  //   // 导入时想要省略的扩展名列表
  //   // 不建议使用 .vue 影响IDE和类型支持
  //   // extensions:['.mjs','.js','.ts','.jsx','.tsx','.json']
  // },
  //本地运行配置，以及反向代理配置
  server: {
    host: "localhost",
    https: false, //是否启用 http 2
    cors: true, //为开发服务器配置 CORS , 默认启用并允许任何源
    open: true, //服务启动时自动在浏览器中打开应用
    port: 9000,
    strictPort: false, //设为true时端口被占用则直接退出，不会尝试下一个可用端口
    hmr: true, //禁用或配置 HMR 连接
    // 传递给 chockidar 的文件系统监视器选项
    watch: {
      ignored: ["!**/node_modules/your-package-name/**"],
    },
    // 反向代理配置
    proxy: {
      "/api": {
        // target: "https://xxxx.com/",
        // changeOrigin: true,
        // rewrite: (path) => path.replace(/^/api/, '')
      },
    },
  },
  optimizeDeps: {
    force: false // 强制进行依赖预构建
  },
});
