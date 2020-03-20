// import { ICONS_DIR } from '@dynamic/options'

export default ({ Vue }) => {
  // console.log(ICONS_DIR)
  const icons = require.context('./public/icons', false, /\.svg$/)
  const importAll = r => r.keys().map(r)
  importAll(icons)

  // regisiter a svg-icon component
  Vue.component('svg-icon', {
    functional: true,
    props: {
      symbol: {
        type: String,
        required: true
      },
      className: {
        type: String,
        default: ''
      }
    },
    render: function (h, { data, props, children }) {
      return h(
        'svg',
        {
          ...data,
          class: [
            'svg-icon',
            `svg-icon-${props.className}`
          ],
          style: {
            width: '1em',
            height: '1em',
            'vertical-align': '-0.15em',
            fill: 'currentColor',
            overflow: 'hidden'
          },
          attrs: { 'aria-hidden': true }
        },
        [
          h('use', {
            attrs: {
              'xlink:href': `#icon-${props.symbol}`
            }
          })
        ]
      )
    }
  })
}
