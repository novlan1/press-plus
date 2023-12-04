---
url : pages/act-detail/act-goods-detail-q-r-code/act-goods-detail-q-r-code
---

## ActGoodsDetailQRCode 物品二维码


## 引入

```ts
import PressActGoodsDetailQRCode from 'press-plus/press-act-goods-detail-q-r-code/press-act-goods-detail-q-r-code';

export default {
  components: {
    PressActGoodsDetailQRCode,
  }
}
```

## 代码演示

### 基础用法

```html
<PressActGoodsDetailBarcode
  :props-data="MOCK_GOODS_Q_R_CODE_DATA"
/>
```

```ts
const MOCK_GOODS_Q_R_CODE_DATA = {
  title: '标题',
  code: '123456',
  main: 'https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/11/own_mike_c13ef4021db3bd9908.png',
  recvway: '请截图保存二维码,使用微信扫码兑换',
  desc: 'desc',
  giftname: 'giftname',
  url: 'https://baidu.com',
};

export default {
  data() {
    return {
      MOCK_GOODS_Q_R_CODE_DATA,
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

