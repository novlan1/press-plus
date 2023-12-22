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
      <PressActGoodsTab
        :show.sync="show"
        :hide-tip-style.sync="hideTipStyle"
        :use-tip-class.sync="useTipClass"
        :m-goods-select-tab="curTab"
        @goodsSelectTabClick="goodsSelectTabClick"
        @gotoExpiredGoods="gotoExpiredGoods"
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
import PressActGoodsTab from 'src/packages/press-act-goods-tab/press-act-goods-tab.vue';
import { getActCustomStyleMixin } from 'src/utils/mixin/act-custom-style.ts';
import { STYLE_LIST } from 'src/packages/press-act-goods-tab/demo-helper/style-list';


export default {
  components: {
    PressActGoodsTab,
    ActDemo,
  },
  mixins: [
    getActCustomStyleMixin('PressActGoodsTab', STYLE_LIST),
  ],
  data() {
    return {
      show: true,
      curTab: 0,
    };
  },

  mounted() {
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
};
</script>
<style scoped lang="scss">
.demo-wrap.press-act-goods-tab--type-pvp {
  background: #2a3955;
}
</style>
