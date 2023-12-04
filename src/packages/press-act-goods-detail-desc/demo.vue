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
      <PressActGoodsDetailDesc
        :show="true"
        :hide-tip-style.sync="hideTipStyle"
        :use-tip-class.sync="useTipClass"
        :props-data="MOCK_GOODS_DESC"
        @onClickItem="onClickItem"
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
import PressActGoodsDetailDesc from 'src/packages/press-act-goods-detail-desc/press-act-goods-detail-desc.vue';
import { getActCustomStyleMixin } from 'src/utils/mixin/act-custom-style.ts';
import { STYLE_LIST } from 'src/packages/press-act-goods-detail-desc/demo-helper/style-list';
import { MOCK_GOODS_DESC } from 'src/packages/press-act-goods-detail-main/demo-helper/data';


export default {
  components: {
    PressActGoodsDetailDesc,
    ActDemo,
  },
  mixins: [
    getActCustomStyleMixin('PressActGoodsDetailDesc', STYLE_LIST, 'pvp-vertical'),
  ],
  data() {
    return {
      show: true,
      MOCK_GOODS_DESC,
    };
  },

  mounted() {
  },
  methods: {
    onClickItem(item) {
      this.onGTip(`[click] ${item.title}`);
      console.log('[onClickItem]', item);
    },
  },
};
</script>
<style scoped lang="scss">
</style>
