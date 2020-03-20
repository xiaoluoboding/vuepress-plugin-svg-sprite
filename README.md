# Vuepress Plugin Svg Sprite

Register a global `<svg-icon />` component for VuePress.

## See Demo on CodeSandbox

## Installation

```bash
yarn add vuepress-plugin-svg-sprite -S
or
npm i vuepress-plugin-svg-sprite -S
```

## Register the plugin

```js
...
module.exports = {
  ...,
  plugins: {
    ['svg-sprite']
  },
  ...
}
...
```

## Usage

```vue
<svg-icon symbol="github" />
```

## API

| Props | Description | Type | Default |
| :---: | :---------: | :--: | :-----: |
| symbol | - | String | - |
| iconClass | - | String | - |

## License

MIT
