# Quick start

`Press Plus` currently supports `n+1` terminal, `n` is the capability provided by `uni-app`, including H5, WeChat applet, QQ applet, etc. `1` is an ordinary Vue project. And compatible with both Vue2 and Vue3.

## uni-app project

For the `uni-app` project, `Press Plus` is used as follows.

1. Install the `npm` package


```bash
npm i press-plus
```


2. Introduce and use it normally in the page

For example, the `button` component:

```vue
<template>
   <PressButton>
     button
   </PressButton>
</template>
<script>
import PressButton from 'press-plus/press-button/press-button.vue'

export default {
   components: {
     PressButton,
   }
}
</script>
```

3. Configuration

Note that you need to configure `transpileDependencies` in `vue.config.js`:

```js
module.exports = {
   transpileDependencies: ['press-ui', 'press-plus'],
}
```


## Ordinary Vue project

`Press Plus` supports ordinary Vue projects.

The `Press Plus` component has the following additional content than ordinary components:

1. Conditional compilation, the core of cross-platform, can be implemented in ordinary Vue projects using this [loader](https://novlan1.github.io/uni-plugin-light/zh/loader/ifdef-loader.html)
2. `scroll-view`, `swiper`, `swiper-item` global components


Therefore, to use `Press Plus` in a normal Vue project, in addition to performing the above steps, you also need to do the following things.

1. Install npm package:

```bash
npm i uni-plugin-light -D
```

2. Add the following settings in `vue.config.js`:

```js
const IF_DEF_LOADER = 'uni-plugin-light/lib/loader/ifdef-loader';

module.export = {
   chainWebpack(config) {
     config.module
       .rule('ifdef-loader')
       //According to the actual configuration file type of the project
       .test(/press-plus.*(\.vue|\.ts|\.js|\.css|\.scss)$/)
       .use(IF_DEF_LOADER)
       .loader(IF_DEF_LOADER)
       .options({
         context: { H5: true },
         type: ['css', 'js', 'html'],
       })
       .end();
   }
}
```

3. Introducing global components, you can directly use the method encapsulated by `Press Plus`.

```ts
// main.js
import { initPureAdapter } from 'press-plus/common/pure/adapter';

initPureAdapter();
```

## Vue3 project

`Press Plus` supports Vue3 projects.

For the `uni-app` project of Vue3, when calling the component functionally, you need to pass in `ref` instead of `id`.

Before:

```html
<press-popup
   :id="PRESS_PICKER_ID"
   mode="functional"
>
  xxx
</press-popup>
```

Now:

```html
<press-popup
   :ref="PRESS_PICKER_ID"
   mode="functional"
>
   xxx
</press-popup>
```