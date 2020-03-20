const path = require('path')
const resolve = dir => path.join(__dirname, dir)

module.exports = (options, context) => {
  // plugin options iconsDir, point to './vuepress/public/icons'
  const { iconsDir = './public/icons' } = options
  return {
    name: 'svg-sprite',
    enhanceAppFiles: [
      resolve('enhanceApp.js')
    ],
    clientDynamicModules () {
      return {
        name: 'options.js',
        content: `export const ICONS_DIR = '${options.iconsDir}'`
      }
    },
    chainWebpack (config) {
      config.module
        .rule('svg')
        .exclude.add(resolve(iconsDir))
        .end()
      config.module
        .rule('svg-sprite-loader')
        .test(/\.svg$/)
        .include.add(resolve(iconsDir))
        .end()
        .use('svg-sprite-loader')
        .loader('svg-sprite-loader')
        .options({
          symbolId: 'icon-[name]'
        })
        .end()
        .before('svg-sprite-loader')
        .use('svgo-loader')
        .loader('svgo-loader')
        .options({
          plugins: [
            { removeTitle: true },
            { convertColors: { shorthex: false } },
            { convertPathData: false }
          ]
        })
        .end()
    }
  }
}
