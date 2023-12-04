<template>
  <div
    class="demo-wrap"
    :class="curGameClass"
  >
    <ActDemo
      :custom-style-str="styleMap[customStyle] && styleMap[customStyle].label"
      :show.sync="show"
      :hide-tip-style.sync="hideTipStyle"
      :use-tip-class.sync="useTipClass"
      @onCustom="onCustom"
    >
      <PressActGoodsDetailMain
        :show.sync="show"
        :hide-tip-style.sync="hideTipStyle"
        :use-tip-class.sync="useTipClass"
        :has-button="hasButton"
      >
        <template #desc0>
          <PressActGoodsDetailDesc
            :hide-tip-style="hideTipStyle"
            :use-tip-class="useTipClass"
            :props-data="MOCK_GOODS_DESC"
          />
        </template>

        <template #code>
          <PressActGoodsDetailCode
            :hide-tip-style="hideTipStyle"
            :use-tip-class="useTipClass"
            :props-data="MOCK_GOODS_CODE_INFO"
          />
        </template>
        <template #barcode>
          <PressActGoodsDetailBarcode
            :hide-tip-style="hideTipStyle"
            :use-tip-class="useTipClass"
            :props-data="MOCK_GOODS_BARCODE_INFO"
          />
        </template>
        <template #desc1>
          <PressActGoodsDetailQRCode
            :hide-tip-style="hideTipStyle"
            :use-tip-class="useTipClass"
            :props-data="MOCK_GOODS_Q_R_CODE_DATA"
          />
        </template>

        <template #select>
          <PressActGoodsDetailSelect
            :hide-tip-style="hideTipStyle"
            :use-tip-class="useTipClass"
            :gift-list="MOCK_GOODS_DETAIL_SELECT"
          />
        </template>

        <template #primary-button>
          <PressActGoodsDetailPrimaryButton
            :hide-tip-style="hideTipStyle"
            :use-tip-class="useTipClass"
            :primary-button="primaryButton"
          />
        </template>
        <template #secondary-button>
          <PressActGoodsDetailSecondaryButton
            :hide-tip-style="hideTipStyle"
            :use-tip-class="useTipClass"
            :secondary-button="secondaryButton"
          />
        </template>
      </PressActGoodsDetailMain>
    </ActDemo>

    <PressPopupCell
      :id="FUNCTIONAL_ID_MAP.POPUP_CELL"
      :ref="FUNCTIONAL_ID_MAP.POPUP_CELL"
      mode="functional"
    />

    <PressPicker
      :id="FUNCTIONAL_ID_MAP.PICKER"
      :ref="FUNCTIONAL_ID_MAP.PICKER"
      mode="functional"
    />
  </div>
</template>
<script>
import ActDemo from 'src/pages/components/act-demo/act-demo.vue';
import PressActGoodsDetailMain from 'src/packages/press-act-goods-detail-main/press-act-goods-detail-main.vue';
import PressActGoodsDetailBarcode from 'src/packages/press-act-goods-detail-barcode/press-act-goods-detail-barcode.vue';
import PressActGoodsDetailCode from 'src/packages/press-act-goods-detail-code/press-act-goods-detail-code.vue';
import PressActGoodsDetailDesc from 'src/packages/press-act-goods-detail-desc/press-act-goods-detail-desc.vue';
import PressActGoodsDetailSelect from 'src/packages/press-act-goods-detail-select/press-act-goods-detail-select.vue';
import PressActGoodsDetailQRCode from 'src/packages/press-act-goods-detail-q-r-code/press-act-goods-detail-q-r-code.vue';
import PressActGoodsDetailPrimaryButton from 'src/packages/press-act-goods-detail-primary-button/press-act-goods-detail-primary-button.vue';
import PressActGoodsDetailSecondaryButton from 'src/packages/press-act-goods-detail-secondary-button/press-act-goods-detail-secondary-button.vue';
import {
  MOCK_GOODS_BARCODE_INFO,
  MOCK_GOODS_CODE_INFO,
  MOCK_GOODS_DESC,
  MOCK_GOODS_META,
  MOCK_GOODS_Q_R_CODE_DATA,
  MOCK_GOODS_DETAIL_SELECT,
} from 'src/packages/press-act-goods-detail-main/demo-helper/data';

import { getActCustomStyleMixin } from 'src/utils/mixin/act-custom-style.ts';
import { STYLE_LIST } from 'src/packages/press-act-goods-detail-main/demo-helper/style-list';


export default {
  components: {
    PressActGoodsDetailMain,
    PressActGoodsDetailBarcode,
    PressActGoodsDetailCode,
    PressActGoodsDetailDesc,
    PressActGoodsDetailPrimaryButton,
    PressActGoodsDetailSecondaryButton,
    PressActGoodsDetailSelect,
    PressActGoodsDetailQRCode,
    ActDemo,
  },
  mixins: [
    getActCustomStyleMixin([
      'PressActGoodsDetailMain',
      'PressActGoodsDetailBarcode',
      'PressActGoodsDetailCode',
      'PressActGoodsDetailDesc',
      'PressActGoodsDetailPrimaryButton',
      'PressActGoodsDetailSecondaryButton',
      'PressActGoodsDetailSelect',
      'PressActGoodsDetailQRCode',
    ], STYLE_LIST, 'pvp-vertical'),
  ],
  data() {
    return {
      show: true,
      hasButton: true,
      primaryButton: '去小程序使用',
      secondaryButton: '标为已用',

      MOCK_GOODS_BARCODE_INFO,
      MOCK_GOODS_CODE_INFO,
      MOCK_GOODS_DESC,
      MOCK_GOODS_META,
      MOCK_GOODS_Q_R_CODE_DATA,
      MOCK_GOODS_DETAIL_SELECT,
    };
  },

  mounted() {
  },
  methods: {
  },
};
</script>
<style scoped lang="scss">
</style>
