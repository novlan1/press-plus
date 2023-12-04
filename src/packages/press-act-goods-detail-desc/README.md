---
url : pages/act-detail/act-goods-detail-desc/act-goods-detail-desc
---

## ActGoodsDetailDesc 物品介绍


## 引入

```ts
import PressActGoodsDetailDesc from 'press-plus/press-act-goods-detail-desc/press-act-goods-detail-desc';

export default {
  components: {
    PressActGoodsDetailDesc,
  }
}
```

## 代码演示

### 基础用法

```html
<PressActGoodsDetailDesc
  :props-data="MOCK_GOODS_DESC"
  @onClickItem="onClickItem"
/>
```

```ts
const MOCK_GOODS_DESC = [
  {
    title: '适用渠道',
    desc: '汉堡王(南山区桃园路店)等1133家门店可用',
    monify: true,
    monifyText: '>',
    onClickType: 'clickDisplayShop',
  },
  {
    title: '有效期',
    desc: '2023.12.08',
  },
  {
    title: '使用方式',
    desc: '奖励将会发放到你填写的手机名下的汉堡王会员账户，若你不是会员，将用此手机号为你注册',
    isHtml: true,
  },
  {
    title: '用券有礼',
    desc: '2023.07.20前，用券后返亲密玫瑰自选宝箱，先到先得',
  },
];

export default {
  data() {
    return {
      MOCK_GOODS_DESC,
    }
  }
}
```

## API

### Props

| 参数           | 说明                                            | 类型      | 默认值  |
| -------------- | ----------------------------------------------- | --------- | ------- |
| props-data     | 组件数据                                        | _array_   | -       |
| use-tip-class  | 是否使用 `tip-comp` 为前缀的类名                | _boolean_ | `false` |
| hide-tip-style | 是否隐藏 `@TIP_STYLE_NAME` 关键词编译时加的样式 | _boolean_ | `false` |




### Events

| 事件名      | 说明     | 参数   |
| ----------- | -------- | ------ |
| onClickItem | 点击描述 | `item` |
