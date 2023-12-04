---
url : pages/act-detail/act-goods-detail-meta/act-goods-detail-meta
---

## ActGoodsDetailMeta 物品元信息


## 引入

```ts
import PressActGoodsDetailMeta from 'press-plus/press-act-goods-detail-meta/press-act-goods-detail-meta';

export default {
  components: {
    PressActGoodsDetailMeta,
  }
}
```

## 代码演示

### 基础用法

```html
<PressActGoodsDetailMeta
  :props-data="MOCK_GOODS_META"
  :show-subscribe="true"
  :issubscribe="subscribed"
  @clickSubscribe="clickSubscribe"
/>
```

```ts
const MOCK_GOODS_META = {
  benefitTag: '无门槛减54元',
  giftImg: 'https://igame-10037599.cos.ap-shanghai.myqcloud.com/abb33832-3b9f-c25e-a297-6799d5f564c4.png',
  giftname: '5折小皇堡10件套',
  limitTime: '2023.12.08',
  status: 'expired', // expired or used
};

export default {
  data() {
    return {
      MOCK_GOODS_META,
      subscribed: false,
    };
  },
  methods: {
    clickSubscribe() {
      this.subscribed = !this.subscribed;
    },
  },
}
```

## API

### Props

| 参数           | 说明                                            | 类型      | 默认值  |
| -------------- | ----------------------------------------------- | --------- | ------- |
| props-data     | 组件数据                                        | _object_  | -       |
| showSubscribe  | 是否显示订阅按钮                                | _boolean_ | `false` |
| issubscribe    | 是否已订阅                                      | _boolean_ | `false` |
| use-tip-class  | 是否使用 `tip-comp` 为前缀的类名                | _boolean_ | `false` |
| hide-tip-style | 是否隐藏 `@TIP_STYLE_NAME` 关键词编译时加的样式 | _boolean_ | `false` |

### Events

| 事件名         | 说明     | 参数 |
| -------------- | -------- | ---- |
| clickSubscribe | 切换订阅 | -    |
