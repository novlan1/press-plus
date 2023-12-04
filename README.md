
<div align="center">
  <img alt="logo" src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fpress-ui-avatar-transparent.png" width="150" style="margin-bottom: -25px;">
</div>
<h3 align="center">易用、灵活、基于 uni-app 的跨端组件库</h3>

---


### 1. 介绍

`Press Plus` 是从 [Press UI](https://novlan1.github.io/press-ui/) 中剥离的业务组件部分，为什么要分离呢，有下面几点考虑。

1. 基础组件库已十分稳定，业务组件库频繁改动，并且越来越多，存在影响基础组件的风险
2. 持续维护包含大量组件，且高质量的组件库比较累，分离后，`Press UI` 继续追求 `100` 分，`Press Plus` 追求 `95` 分
3. 从用户角度看，使用者如果只用基础组件，完全没必要下载业务组件，而且后续业务组件越来越多，包体积也会越来越大

<img src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_13f3281f0a188e0fbd.png" width="600">

### 1.1. 标准

`Press Plus` 相比 `Press UI`，会在以下几个方面降低标准：

1. 根据业务自身需要，进行 `Vue3` 的适配
2. 根据业务自身需要，进行非 `uni-app` 环境的适配
3. 根据业务自身需要，进行**国际化支持**

上述几点在 `Press UI` 中是全量支持的。

`Press Plus` 和 `Press UI` 都必须遵守的规范包括：

1. 严格的代码规范
2. BEM 规范，且类名需以 `press` 开头
3. 详尽的文档、丰富的示例

### 1.2. 过渡

业务组件过渡注意事项：

- 业务侧需尽快将业务组件的引入路径，改为 `Press Plus`
- `Press UI` **在下个大版本前，都不会删除现有的业务组件**，确保业务侧升级 `Press UI` 时，无大量改动
- 业务组件的更新，要在 `Press Plus` 中进行，`Press UI` 不再维护、新增业务组件

`Press Plus` 文档地址[在这里](https://novlan1.github.io/press-plus/)。

### 2. 解决痛点

将项目中业务组件沉淀到 `Press Plus` 中，有以下好处：

1. **减少业务和组件的耦合**，**降低各自复杂度**，并减少bug
2. **增强组件可维护性**，提升开发效率
    - 通过整理代码，合并属性，分离业务逻辑等，让组件变纯粹，增强可维护性，进而提升效率
3. **封装核心逻辑，控制变化**
    - 不用担心外部合作人员改乱代码，以及解决冲突时的覆盖问题
4. **UI问题定位简单**
    - 三端代码同时发布，以及多种类型的示例，覆盖面全，容易发现UI问题，以及三端表现不一致问题
5. 可提升性能
    - 通过示例中的自定义变量，可定位性能瓶颈，并解决性能问题
6. 提高可复用性，可应用到其他项目
7. 技术沉淀，技术积累，不断打磨组件细节



### 3. 应用场景

`Press Plus`可应用于`uni-app`项目，或者普通的H5项目，同时支持 Vue2 和 Vue3。

目前已应用在王者赛宝、HoK Club、赛宝Pro、和平赛事、高能赛事、商户赛等项目中。

<img src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/4/pvp-esports-screenshort.png" width="300">

<img src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/4/hok-club-screenshot.png" width="300">

<br/>

<!-- <img src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_fa5d34c18c86ae412c.jpg" width="300"> -->

<!-- <img src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_fb1530d4d6e351383c.jpg" width="300"> -->

<!-- <br/> -->

<img src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_2bfb54a9ad6b9bc0ff.jpg" width="600">

### 4. 如何使用

1. 安装`npm`包


```bash
npm i press-plus
```


2. 在页面中正常引入并使用

比如 `message-detail` 组件：

```html
<template>
  <PressMessageDetail />
</template>
```

```ts
<script>
import PressMessageDetail from 'press-plus/press-message-detail/press-message-detail.vue'

export default {
  components: {
    PressMessageDetail, 
  }
}
</script>
```

3. 配置

需要在`vue.config.js`中配置下 `transpileDependencies`：

```js
module.exports = {
  transpileDependencies: ['press-ui', 'press-plus'],
}
```

### 5. 贡献指南

请查看[这里](https://github.com/novlan1/press-plus/blob/release/CONTRIBUTING.md)。

