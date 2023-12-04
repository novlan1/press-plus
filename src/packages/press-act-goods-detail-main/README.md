---
url : pages/act-detail/act-goods-detail-main/act-goods-detail-main
---

## ActGoodsDetailMain 物品详情


## 引入

```ts
import PressActGoodsDetailMain from 'press-plus/press-act-goods-detail-main/press-act-goods-detail-main';

export default {
  components: {
    PressActGoodsDetailMain,
  }
}
```

## 代码演示

### 基础用法

```html
<PressActGoodsDetailMain
  :has-button="hasButton"
>
  <template #desc0>
    <PressActGoodsDetailDesc
      :props-data="MOCK_GOODS_DESC"
    />
  </template>

  <template #code>
    <PressActGoodsDetailCode
      :props-data="MOCK_GOODS_CODE_INFO"
    />
  </template>
  <template #barcode>
    <PressActGoodsDetailBarcode
      :props-data="MOCK_GOODS_BARCODE_INFO"
    />
  </template>
  <template #desc1>
    <PressActGoodsDetailQRCode
      :props-data="MOCK_GOODS_Q_R_CODE_DATA"
    />
  </template>

  <template #select>
    <PressActGoodsDetailSelect
      :gift-list="MOCK_GOODS_DETAIL_SELECT"
    />
  </template>

  <template #primary-button>
    <PressActGoodsDetailPrimaryButton
      :primary-button="primaryButton"
    />
  </template>
  <template #secondary-button>
    <PressActGoodsDetailSecondaryButton
      :secondary-button="secondaryButton"
    />
  </template>
</PressActGoodsDetailMain>
```

```ts
export default {
  data() {
    return {
      hasButton: true,
      primaryButton: '去小程序使用',
      secondaryButton: '标为已用',

      // 以下数据，可在对应组件文档中查看
      MOCK_GOODS_BARCODE_INFO,
      MOCK_GOODS_CODE_INFO,
      MOCK_GOODS_DESC,
      MOCK_GOODS_META,
      MOCK_GOODS_Q_R_CODE_DATA,
      MOCK_GOODS_DETAIL_SELECT,
    }
  }
}
```

## API

### Props

| 参数           | 说明                                            | 类型      | 默认值  |
| -------------- | ----------------------------------------------- | --------- | ------- |
| has-button     | 是否包含按钮                                    | _boolean_ | `false` |
| use-tip-class  | 是否使用 `tip-comp` 为前缀的类名                | _boolean_ | `false` |
| hide-tip-style | 是否隐藏 `@TIP_STYLE_NAME` 关键词编译时加的样式 | _boolean_ | `false` |

