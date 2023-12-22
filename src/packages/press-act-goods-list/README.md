---
url : pages/act-list/act-goods-list/act-goods-list
---

## ActGoodsList 物品列表


## 引入

```ts
import PressActGoodsList from 'press-plus/press-act-goods-list/press-act-goods-list';

export default {
  components: {
    PressActGoodsList,
  }
}
```

## 代码演示

### 基础用法

```html
<PressActGoodsList
  :m-list-is-loading.sync="dataMap.loading"
  :m-list-is-end="dataMap.finished"
  :m-goods-list="dataMap.list"
  @loadMore="loadMore"
  @gotoGoodDetail="gotoGoodDetail"
/>
```

```ts
export const getMockGoodsList = () => Array.from({ length: 10 }).map((_, index) => {
  let statusStyle = 'primary';
  let statusText = '去使用';
  if (index % 4 == 0) {
    statusStyle = 'disabled';
    statusText = '已过期';
  } else if (index % 4 == 1) {
    statusStyle = 'delivered';
    statusText = '已使用';
  } else if (index % 4 == 2) {
    statusStyle = '';
    statusText = '去使用';
  }

  return {
    picurl: 'https://game.gtimg.cn/images/user/cp/a20190402wifiTQ/sys.png',
    name: '游戏礼包名称名称',
    benefit_tag: 'tag',
    provider: '汉堡王',
    deadline: '2020.06.25',
    overdueTip: '今日到期',
    statusText,
    statusStyle,
  };
});


export default {
  data() {
    return {
      dataMap: {
        loading: false,
        finished: false,
        list: [],
      },
    }
  },
  mounted() {
    setTimeout(() => {
      this.dataMap.list = this.dataMap.list.concat(getMockGoodsList());
    }, 2000);
  },
  methods: {
    loadMore() {
      console.log('[loadMore]');

      setTimeout(() => {
        this.dataMap.list = this.dataMap.list.concat(getMockGoodsList());
        this.dataMap.loading = false;
        if (this.dataMap.list.length > 60) {
          this.dataMap.finished = true;
        }
      }, 2000);
    },
    gotoGoodDetail(goodsItem) {
      console.log('[gotoGoodDetail]', goodsItem);
    },
  },
}
```

## API

### Props


| 参数              | 说明                                            | 类型      | 默认值  |
| ----------------- | ----------------------------------------------- | --------- | ------- |
| m-goods-list      | 物品列表                                        | _array_   | -       |
| m-list-is-loading | 是否正在加载中                                  | _boolean_ | `false` |
| m-list-is-end     | 是否加载完成                                    | _boolean_ | `false` |
| use-tip-class     | 是否使用 `tip-comp` 为前缀的类名                | _boolean_ | `false` |
| hide-tip-style    | 是否隐藏 `@TIP_STYLE_NAME` 关键词编译时加的样式 | _boolean_ | `false` |


### Events

| 事件名                | 说明         | 参数        |
| --------------------- | ------------ | ----------- |
| gotoGoodDetail        | 点击物品详情 | `goodsItem` |
| update:mListIsLoading | 更新加载状态 | `isLoading` |
| loadMore              | 加载更多     | -           |
