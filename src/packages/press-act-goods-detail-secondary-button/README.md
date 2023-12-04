---
url : pages/act-detail/act-goods-detail-secondary-button/act-goods-detail-secondary-button
---

## ActGoodsDetailSecondaryButton 次按钮


## 引入

```ts
import PressActGoodsDetailSecondaryButton from 'press-plus/press-act-goods-detail-secondary-button/press-act-goods-detail-secondary-button';

export default {
  components: {
    PressActGoodsDetailSecondaryButton,
  }
}
```

## 代码演示

### 基础用法

```html
<PressActGoodsDetailBarcode
  :secondary-button="secondaryButton"
  :only-one-btn="onlyOneBtn"
  @clickButton="clickButton"
/>
```

```ts
export default {
  data() {
    return {
      secondaryButton: '去小程序使用',
      onlyOneBtn: true,
    }
  },
  methods: {
    clickButton() {
      this.onGTip('[clickButton]');
    },
  },
}
```

## API

### Props

| 参数             | 说明                                            | 类型      | 默认值  |
| ---------------- | ----------------------------------------------- | --------- | ------- |
| secondary-button | 按钮文案                                        | _string_  | -       |
| only-one-btn     | 是否父级只有1个按钮                             | _boolean_ | `false` |
| use-tip-class    | 是否使用 `tip-comp` 为前缀的类名                | _boolean_ | `false` |
| hide-tip-style   | 是否隐藏 `@TIP_STYLE_NAME` 关键词编译时加的样式 | _boolean_ | `false` |

### Events

| 事件名      | 说明     | 参数 |
| ----------- | -------- | ---- |
| clickButton | 点击按钮 | -    |
