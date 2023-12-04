---
url : pages/act-detail/act-goods-detail-barcode/act-goods-detail-barcode
---

## ActGoodsDetailBarcode 物品条形码


## 引入

```ts
import PressActGoodsDetailBarcode from 'press-plus/press-act-goods-detail-barcode/press-act-goods-detail-barcode';

export default {
  components: {
    PressActGoodsDetailBarcode,
  }
}
```

## 代码演示

### 基础用法

```html
<PressActGoodsDetailBarcode
  :props-data="MOCK_GOODS_BARCODE_INFO"
/>
```

```ts
const MOCK_GOODS_BARCODE_INFO = {
  title: '标题',
  cdkey: '123456',
  recvway: '请向营业员出示此码兑换',
  desc: '奖品描述',
  giftname: '奖品名称',
};

export default {
  data() {
    return {
      MOCK_GOODS_BARCODE_INFO,
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
