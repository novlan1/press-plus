---
url : pages/act-list/act-goods-tab/act-goods-tab
horHeight: 500
---

## ActGoodsTab 物品标签页


## 引入

```ts
import PressActGoodsTab from 'press-plus/press-act-goods-tab/press-act-goods-tab';

export default {
  components: {
    PressActGoodsTab,
  }
}
```

## 代码演示

### 基础用法

```html
<PressActGoodsTab
  :m-goods-select-tab="curTab"
  @goodsSelectTabClick="goodsSelectTabClick"
  @gotoExpiredGoods="gotoExpiredGoods"
/>
```

```ts
export default {
  data() {
    return {
      curTab: 0,
    };
  },
  methods: {
    gotoExpiredGoods() {
      this.onGTip('[gotoExpiredGoods]');
    },
    goodsSelectTabClick(tab) {
      console.log('[goodsSelectTabClick]', tab);
      this.onGTip('[goodsSelectTabClick]');
      this.curTab = tab;
    },
  },
}
```

## API

### Props

| 参数               | 说明                                            | 类型      | 默认值   |
| ------------------ | ----------------------------------------------- | --------- | -------- |
| m-goods-select-tab | 当前选中的标签页                                | _number_  | `-1`     |
| goods-status-type  | 标签页列表                                      | _array_   | 参考下方 |
| is-empty-content   | 是否为空                                        | _boolean_ | `false`  |
| my-goods-tab-tip   | 提示内容                                        | _string_  | -        |
| use-tip-class      | 是否使用 `tip-comp` 为前缀的类名                | _boolean_ | `false`  |
| hide-tip-style     | 是否隐藏 `@TIP_STYLE_NAME` 关键词编译时加的样式 | _boolean_ | `false`  |


### Events

| 事件名              | 说明           | 参数  |
| ------------------- | -------------- | ----- |
| goodsSelectTabClick | 切换标签页     | `tab` |
| gotoExpiredGoods    | 点击已失效物品 | -     |


### goodsStatusType

goodsStatusType 默认值如下：

```ts
[    
  // 查询的物品状态：
  // 0:查所有 2是已发放(成功和失败)，4是未发放且未过期，
  // 6是未发放且已过期 自定义 7即将过期 8新到 9游戏礼包
  { text: '全部', status: 4, total: 0 },
  { text: '即将过期', status: 7, total: 0 },
  { text: '新到', status: 8, total: 0 },
  { text: '游戏礼包', status: 9, total: 0 },
]
```
