<div align="center">
   <img alt="logo" src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/press%2Fimg%2Fpress-ui-avatar-transparent.png" width="150" style=" margin-bottom: -25px;">
</div>
<h3 align="center">Easy-to-use, flexible, uni-app-based cross-end component library</h3>

---

### 1 Introduction

Press Plus is the business component part separated from [Press UI](https://h5.igame.qq.com/pmd-mobile.support.press-ui.press-ui/). Why should it be separated? The following are A few points to consider.

1. The basic component library is already very stable, but the business component library changes frequently and more and more, and there is a risk of affecting the basic components.
2. Continuous maintenance of a high-quality component library containing a large number of components is tiring. After separation, `Press UI` will continue to pursue `100` points, and `Press Plus` will pursue `95` points.
3. From a user perspective, if users only use basic components, there is no need to download business components. Moreover, as there are more and more business components in the future, the package size will become larger and larger.

<img src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_13f3281f0a188e0fbd.png" width="600">

### 1.1. Standards

Compared with `Press UI`, `Press Plus` will lower the standards in the following aspects:

1. Adapt `Vue3` according to the needs of the business itself
2. Adapt to non-uni-app environments according to business needs
3. Provide **international support** based on business needs

The above points are fully supported in `Press UI`.

Specifications that both `Press Plus` and `Press UI` must comply with include:

1. Strict coding standards
2. BEM specification, and the class name must start with `press`
3. Detailed documentation and rich examples

### 1.2. Transition

Business component transition considerations:

- The business side needs to change the introduction path of business components to `Press Plus` as soon as possible
- `Press UI` **Existing business components will not be deleted before the next major version**, ensuring that there are no major changes when the business side upgrades `Press UI`
- Updates of business components must be carried out in `Press Plus`. `Press UI` will no longer maintain or add new business components.

### 2. Solve pain points

Precipitating the business components in the project into `Press Plus` has the following benefits:

1. **Reduce the coupling between business and components**, **reduce their respective complexity**, and reduce bugs
2. **Enhance component maintainability** and improve development efficiency
     - By organizing code, merging attributes, separating business logic, etc., we can make components pure, enhance maintainability, and thereby improve efficiency.
3. **Encapsulate core logic and control changes**
     - No need to worry about external collaborators changing the code and overwriting issues when resolving conflicts
4. **Easy to locate UI issues**
     - The three terminal codes are released at the same time, as well as various types of examples, with full coverage, making it easy to find UI problems and inconsistent performance of the three terminals
5. Can improve performance
     - Use custom variables in examples to locate performance bottlenecks and solve performance problems
6. Improve reusability and can be applied to other projects
7. Technology precipitation, technology accumulation, and continuous polishing of component details



### 3. Application scenarios

`Press Plus` can be applied to `uni-app` projects or ordinary H5 projects, supporting both Vue2 and Vue3.

Currently, it has been used in King Saibao, HoK Club, Saibao Pro, peace events, high-energy events, merchant competitions and other projects.

<img src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/4/pvp-esports-screenshort.png" width="300">

<img src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/4/hok-club-screenshot.png" width="300">

<br/>

<!-- <img src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_fa5d34c18c86ae412c.jpg" width="300"> -->

<!-- <img src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_fb1530d4d6e351383c.jpg" width="300"> -->

<!-- <br/> -->

<img src="https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/10/own_mike_2bfb54a9ad6b9bc0ff.jpg" width="600">

### 4. How to use

1. Install the `npm` package


```bash
npm i press-plus
```


2. Introduce and use it normally in the page

For example, the `message-detail` component:

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
3. Configuration

You need to configure `transpileDependencies` in `vue.config.js`:

```js
module.exports = {
   transpileDependencies: ['press-ui', 'press-plus'],
}
```

### 5. Contribution Guidelines

Please see [here](./contributing.md).