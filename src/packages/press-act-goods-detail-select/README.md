---
url : pages/act-detail/act-goods-detail-select/act-goods-detail-select
---

## ActGoodsDetailSelect 物品自选


## 引入

```ts
import PressActGoodsDetailSelect from 'press-plus/press-act-goods-detail-select/press-act-goods-detail-select';

export default {
  components: {
    PressActGoodsDetailSelect,
  }
}
```

## 代码演示

### 基础用法

```html
<PressActGoodsDetailSelect
  :gift-list="MOCK_GOODS_DETAIL_SELECT"
/>
```

```ts
const MOCK_GOODS_DETAIL_SELECT = Array.from({ length: 5 })
  .map(() => ({
    giftpic: 'https://igame-10037599.cos.ap-shanghai.myqcloud.com/abb33832-3b9f-c25e-a297-6799d5f564c4.png',
    giftname: '奖品名称',
  }));


export default {
  data() {
    return {
      MOCK_GOODS_DETAIL_SELECT,
    }
  }
}
```

## API

### Props


| 参数           | 说明                                            | 类型      | 默认值  |
| -------------- | ----------------------------------------------- | --------- | ------- |
| gift-list      | 组件数据                                        | _array_   | -       |
| use-tip-class  | 是否使用 `tip-comp` 为前缀的类名                | _boolean_ | `false` |
| hide-tip-style | 是否隐藏 `@TIP_STYLE_NAME` 关键词编译时加的样式 | _boolean_ | `false` |



