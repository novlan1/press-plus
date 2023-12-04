---
url : pages/act-detail/act-goods-detail-primary-button/act-goods-detail-primary-button
---

## ActGoodsDetailPrimaryButton 主按钮


## 引入

```ts
import PressActGoodsDetailPrimaryButton from 'press-plus/press-act-goods-detail-primary-button/press-act-goods-detail-primary-button';

export default {
  components: {
    PressActGoodsDetailPrimaryButton,
  }
}
```

## 代码演示

### 基础用法

```html
<PressActGoodsDetailPrimaryButton
  :primary-button="primaryButton"
  :primary-long-button="primaryLongButton"
  @clickButton="clickButton"
/>
```

```ts
export default {
  data() {
    return {
      primaryButton: '去小程序使用',
      primaryLongButton: true,
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

| 参数                | 说明                                            | 类型      | 默认值  |
| ------------------- | ----------------------------------------------- | --------- | ------- |
| primary-button      | 按钮文案                                        | _string_  | -       |
| primary-long-button | 是否为长按钮                                    | _boolean_ | `false` |
| primary-copy-text   | 复制内容                                        | _string_  | -       |
| use-tip-class       | 是否使用 `tip-comp` 为前缀的类名                | _boolean_ | `false` |
| hide-tip-style      | 是否隐藏 `@TIP_STYLE_NAME` 关键词编译时加的样式 | _boolean_ | `false` |

### Events

| 事件名      | 说明     | 参数 |
| ----------- | -------- | ---- |
| clickButton | 点击按钮 | -    |
