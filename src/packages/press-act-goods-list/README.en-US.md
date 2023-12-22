---
url: pages/act-list/act-goods-list/act-goods-list
---

## ActGoodsList 


## Introduction

```ts
import PressActGoodsList from 'press-plus/press-act-goods-list/press-act-goods-list';

export default {
   components: {
     PressActGoodsList,
   }
}
```

## Code Demo

### Basic usage

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
   let statusText = 'Go to use';
   if (index % 4 == 0) {
     statusStyle = 'disabled';
     statusText = 'Expired';
   } else if (index % 4 == 1) {
     statusStyle = 'delivered';
     statusText = 'used';
   } else if (index % 4 == 2) {
     statusStyle = '';
     statusText = 'Go to use';
   }

   return {
     picurl: 'https://game.gtimg.cn/images/user/cp/a20190402wifiTQ/sys.png',
     name: 'Game gift package name',
     benefit_tag: 'tag',
     provider: 'Burger King',
     deadline: '2020.06.25',
     overdueTip: 'Expires today',
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


| Parameters        | Description                                                                | Type      | Default value |
| ----------------- | -------------------------------------------------------------------------- | --------- | ------------- |
| m-goods-list      | items list                                                                 | _array_   | -             |
| m-list-is-loading | Whether it is loading                                                      | _boolean_ | `false`       |
| m-list-is-end     | Whether loading is complete                                                | _boolean_ | `false`       |
| use-tip-class     | Whether to use the class name prefixed with `tip-comp`                     | _boolean_ | `false`       |
| hide-tip-style    | Whether to hide the style added when `@TIP_STYLE_NAME` keyword is compiled | _boolean_ | `false`       |


### Events

| Event name            | Description           | Parameters  |
| --------------------- | --------------------- | ----------- |
| gotoGoodDetail        | Click item details    | `goodsItem` |
| update:mListIsLoading | Update loading status | `isLoading` |
| loadMore              | Load more             | -           |