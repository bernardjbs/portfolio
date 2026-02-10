import { configure } from 'quasar/wrappers'

export default configure(() => {
  return {
    boot: [],
    css: ['app.scss'],
    extras: [
      'roboto-font',
      'material-icons',
    ],
    build: {
      target: { browser: ['es2022', 'firefox115', 'chrome115', 'safari14'] },
      vueRouterMode: 'hash',
      vitePlugins: [],
    },
    devServer: {
      open: true,
    },
    framework: {
      plugins: [],
    },
  }
})
