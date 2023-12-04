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
      <PressActGoodsDetailPrimaryButton
        :show.sync="show"
        :hide-tip-style.sync="hideTipStyle"
        :use-tip-class.sync="useTipClass"
        :primary-button="primaryButton"
        :primary-long-button="primaryLongButton"
        @clickButton="clickButton"
      />
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
import PressActGoodsDetailPrimaryButton from 'src/packages/press-act-goods-detail-primary-button/press-act-goods-detail-primary-button.vue';
import { getActCustomStyleMixin } from 'src/utils/mixin/act-custom-style.ts';
import { STYLE_LIST } from 'src/packages/press-act-goods-detail-primary-button/demo-helper/style-list';


export default {
  components: {
    PressActGoodsDetailPrimaryButton,
    ActDemo,
  },
  mixins: [
    getActCustomStyleMixin('PressActGoodsDetailPrimaryButton', STYLE_LIST, 'pvp-vertical'),
  ],
  data() {
    return {
      show: true,
      primaryButton: '去小程序使用',
      primaryLongButton: true,
    };
  },

  mounted() {
  },
  methods: {
    clickButton() {
      this.onGTip('[clickButton]');
    },
  },
};
</script>
<style scoped lang="scss">
</style>
