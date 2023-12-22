---
url: pages/act-list/act-goods-item/act-goods-item
---

## ActGoodsItem


## Introduction

```ts
import PressActGoodsItem from 'press-plus/press-act-goods-item/press-act-goods-item';

export default {
   components: {
     PressActGoodsItem,
   }
}
```

## Code Demo

### Basic usage

```html
<PressActGoodsItem
   :props-data="mockData"
/>
```

```ts
const mockData = {
   picurl: 'https://game.gtimg.cn/images/user/cp/a20190402wifiTQ/sys.png',
   name: 'Game gift package name',
   benefit_tag: 'tag',
   provider: 'Burger King',
   deadline: '2020.06.25',
   overdueTip: 'Expires today',
   statusText: 'Go to use',
   statusStyle: 'primary',
};

export default {
   data() {
     return {
       mockData,
     }
   }
}
```

## API

### Props

| Parameters | Description | Type | Default value |
| ---------- | ----------- | ---- | ------------- ||
| props-data     | component data                                                             | _object_  | -             |
| use-tip-class  | Whether to use the class name prefixed with `tip-comp`                     | _boolean_ | `false`       |
| hide-tip-style | Whether to hide the style added when `@TIP_STYLE_NAME` keyword is compiled | _boolean_ | `false`       |

### Events

| Event name  | Description     | Parameters |
| ----------- | --------------- | ---------- |
| clickButton | click button    | `event`    |
| clickItem   | Click list item | -          |