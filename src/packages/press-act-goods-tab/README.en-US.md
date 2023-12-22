---
url: pages/act-list/act-goods-tab/act-goods-tab
horHeight: 500
---

## ActGoodsTab 


## Introduction

```ts
import PressActGoodsTab from 'press-plus/press-act-goods-tab/press-act-goods-tab';

export default {
   components: {
     PressActGoodsTab,
   }
}
```

## Code Demo

### Basic usage

```html
<PressActGoodsTab
   @goodsSelectTabClick="goodsSelectTabClick"
   @gotoExpiredGoods="gotoExpiredGoods"
/>
```

```ts
export default {
   methods: {
     gotoExpiredGoods() {
       this.onGTip('[gotoExpiredGoods]');
     },
     goodsSelectTabClick(tab) {
       console.log('[goodsSelectTabClick]', tab);
       this.onGTip('[goodsSelectTabClick]');
     },
   },
}
```

## API

### Props

| Parameters         | Description                                                                | Type      | Default value |
| ------------------ | -------------------------------------------------------------------------- | --------- | ------------- |
| m-goods-select-tab | Currently selected tab page                                                | _number_  | `-1`          |
| goods-status-type  | Tag list                                                                   | _array_   | See below     |
| is-empty-content   | Whether it is empty                                                        | _boolean_ | `false`       |
| my-goods-tab-tip   | Tip content                                                                | _string_  | -             |
| use-tip-class      | Whether to use the class name prefixed with `tip-comp`                     | _boolean_ | `false`       |
| hide-tip-style     | Whether to hide the style added when `@TIP_STYLE_NAME` keyword is compiled | _boolean_ | `false`       |


### Events

| Event name          | Description            | Parameters |
| ------------------- | ---------------------- | ---------- |
| goodsSelectTabClick | Switch tabs            | `tab`      |
| gotoExpiredGoods    | Click on expired items | -          |


### goodsStatusType

The default values of goodsStatusType are as follows:

```ts
[
   //Query item status:
   // 0: Check all 2 is issued (success and failure), 4 is not issued and has not expired,
   // 6 is unissued and expired. Customized. 7 is about to expire. 8 is new. 9 is a game gift pack.
   { text: 'all', status: 4, total: 0 },
   { text: 'Soon to expire', status: 7, total: 0 },
   { text: 'New arrival', status: 8, total: 0 },
   { text: 'Game Gift Pack', status: 9, total: 0 },
]
```