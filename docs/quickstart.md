# 快速开始

`Press Plus` 目前支持`n+1`端，`n`为`uni-app`提供的能力，包括H5、微信小程序、QQ小程序等，`1`为普通 Vue 项目。并且同时兼容 Vue2 和 Vue3。

## uni-app 项目

对于`uni-app`项目，`Press Plus` 的使用方法如下。

1. 安装`npm`包


```bash
npm i press-plus
```


2. 在页面中正常引入并使用

比如 `button` 组件：

```vue
<template>
  <PressButton>
    按钮
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

3. 配置

注意，需要在`vue.config.js`中配置下 `transpileDependencies`：

```js
module.exports = {
  transpileDependencies: ['press-ui', 'press-plus'],
}
```


## 普通Vue项目

`Press Plus` 支持普通Vue项目。

`Press Plus` 组件比普通的组件多了以下内容：

1. 条件编译，跨平台的核心，普通Vue项目中可以用这个[loader](https://novlan1.github.io/uni-plugin-light/zh/loader/ifdef-loader.html)实现
2. `scroll-view`、`swiper`、`swiper-item`全局组件


所以，要在普通Vue项目中使用 `Press Plus`，除了执行上面的步骤外，还需要做下面几个事情。

1. 安装 npm 包：

```bash
npm i uni-plugin-light -D
```

2. 在 `vue.config.js` 中添加如下设置：

```js
const IF_DEF_LOADER = 'uni-plugin-light/lib/loader/ifdef-loader';

module.export = {
  chainWebpack(config) {
    config.module
      .rule('ifdef-loader')
      // 根据项目实际配置文件类型
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

3. 引入全局组件，可以直接使用`Press Plus`封装好的方法。

```ts
// main.js
import { initPureAdapter } from 'press-plus/common/pure/adapter';

initPureAdapter();
```

## Vue3 项目

`Press Plus` 支持 Vue3 项目。

对于 Vue3 的`uni-app`项目，在函数式调用组件时，需传入`ref`，而非`id`。

之前：

```html
<press-popup
  :id="PRESS_PICKER_ID"
  mode="functional"
>
 xxx
</press-popup>
```

现在：

```html
<press-popup
  :ref="PRESS_PICKER_ID"
  mode="functional"
>
  xxx
</press-popup>
```
