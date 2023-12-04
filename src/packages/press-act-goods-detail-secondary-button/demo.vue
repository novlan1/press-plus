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
      <PressActGoodsDetailSecondaryButton
        :show.sync="show"
        :hide-tip-style.sync="hideTipStyle"
        :use-tip-class.sync="useTipClass"
        :secondary-button="secondaryButton"
        :only-one-btn="onlyOneBtn"
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
import PressActGoodsDetailSecondaryButton from 'src/packages/press-act-goods-detail-secondary-button/press-act-goods-detail-secondary-button.vue';
import { getActCustomStyleMixin } from 'src/utils/mixin/act-custom-style.ts';
import { STYLE_LIST } from 'src/packages/press-act-goods-detail-secondary-button/demo-helper/style-list';


export default {
  components: {
    PressActGoodsDetailSecondaryButton,
    ActDemo,
  },
  mixins: [
    getActCustomStyleMixin('PressActGoodsDetailSecondaryButton', STYLE_LIST, 'pvp-vertical'),
  ],
  data() {
    return {
      show: true,
      secondaryButton: '去小程序使用',
      onlyOneBtn: true,
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
