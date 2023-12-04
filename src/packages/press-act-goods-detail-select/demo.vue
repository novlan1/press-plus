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
      <PressActGoodsDetailSelect
        :show.sync="show"
        :hide-tip-style.sync="hideTipStyle"
        :use-tip-class.sync="useTipClass"
        :gift-list="MOCK_GOODS_DETAIL_SELECT"
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
import PressActGoodsDetailSelect from 'src/packages/press-act-goods-detail-select/press-act-goods-detail-select.vue';
import { getActCustomStyleMixin } from 'src/utils/mixin/act-custom-style.ts';
import { STYLE_LIST } from 'src/packages/press-act-goods-detail-select/demo-helper/style-list';
import { MOCK_GOODS_DETAIL_SELECT } from 'src/packages/press-act-goods-detail-main/demo-helper/data';


export default {
  components: {
    PressActGoodsDetailSelect,
    ActDemo,
  },
  mixins: [
    getActCustomStyleMixin('PressActGoodsDetailSelect', STYLE_LIST, 'pvp-vertical'),
  ],
  data() {
    return {
      show: true,
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
