---
url : pages/act-list/act-goods-item/act-goods-item
---

## ActGoodsItem 物品列表项


## 引入

```ts
import PressActGoodsItem from 'press-plus/press-act-goods-item/press-act-goods-item';

export default {
  components: {
    PressActGoodsItem,
  }
}
```

## 代码演示

### 基础用法

```html
<PressActGoodsItem
  :props-data="mockData"
/>
```

```ts
const mockData = {
  picurl: 'https://game.gtimg.cn/images/user/cp/a20190402wifiTQ/sys.png',
  name: '游戏礼包名称名称',
  benefit_tag: 'tag',
  provider: '汉堡王',
  deadline: '2020.06.25',
  overdueTip: '今日到期',
  statusText: '去使用',
  statusStyle: 'primary',
};

export default {
  data() {
    return {
      mockData,
    }
  },
}
```

## API

### Props

| 参数           | 说明                                            | 类型      | 默认值  |
| -------------- | ----------------------------------------------- | --------- | ------- |
| props-data     | 组件数据                                        | _object_  | -       |
| use-tip-class  | 是否使用 `tip-comp` 为前缀的类名                | _boolean_ | `false` |
| hide-tip-style | 是否隐藏 `@TIP_STYLE_NAME` 关键词编译时加的样式 | _boolean_ | `false` |

### Events

| 事件名      | 说明       | 参数    |
| ----------- | ---------- | ------- |
| clickButton | 点击按钮   | `event` |
| clickItem   | 点击列表项 | -       |
