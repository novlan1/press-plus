---
url : pages/act-detail/act-goods-detail-code/act-goods-detail-code
---

## ActGoodsDetailCode 物品兑换码


## 引入

```ts
import PressActGoodsDetailCode from 'press-plus/press-act-goods-detail-code/press-act-goods-detail-code';

export default {
  components: {
    PressActGoodsDetailCode,
  }
}
```

## 代码演示

### 基础用法

```html
<PressActGoodsDetailCode
  :props-data="MOCK_GOODS_CODE_INFO"
/>
```

```ts
const MOCK_GOODS_CODE_INFO = {
  title: '兑换码',
  recvway: '请复制兑换码，到水羊潮妆小程序-我的-兑换专区粘贴兑换',
  code: 'wzfs5185QI7E2AGQHU9',
  // wxcode: 'wxcode',
  // accountDesc: 'accountDesc',
};

export default {
  data() {
    return {
      MOCK_GOODS_CODE_INFO,
    }
  }
}
```

## API

### Props

| 参数           | 说明                                            | 类型      | 默认值  |
| -------------- | ----------------------------------------------- | --------- | ------- |
| props-data     | 组件数据                                        | _object_  | -       |
| use-tip-class  | 是否使用 `tip-comp` 为前缀的类名                | _boolean_ | `false` |
| hide-tip-style | 是否隐藏 `@TIP_STYLE_NAME` 关键词编译时加的样式 | _boolean_ | `false` |

