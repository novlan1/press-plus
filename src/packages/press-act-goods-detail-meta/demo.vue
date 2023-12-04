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
      <PressActGoodsDetailMeta
        :show.sync="show"
        :hide-tip-style.sync="hideTipStyle"
        :use-tip-class.sync="useTipClass"
        :props-data="MOCK_GOODS_META"
        :show-subscribe="true"
        :issubscribe="subscribed"
        @clickSubscribe="clickSubscribe"
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
import PressActGoodsDetailMeta from 'src/packages/press-act-goods-detail-meta/press-act-goods-detail-meta.vue';
import { getActCustomStyleMixin } from 'src/utils/mixin/act-custom-style.ts';
import { STYLE_LIST } from 'src/packages/press-act-goods-detail-meta/demo-helper/style-list';
import { MOCK_GOODS_META } from 'src/packages/press-act-goods-detail-main/demo-helper/data';


export default {
  components: {
    PressActGoodsDetailMeta,
    ActDemo,
  },
  mixins: [
    getActCustomStyleMixin('PressActGoodsDetailMeta', STYLE_LIST, 'pvp-vertical'),
  ],
  data() {
    return {
      show: true,
      MOCK_GOODS_META,
      subscribed: false,
    };
  },

  mounted() {
  },
  methods: {
    clickSubscribe() {
      this.subscribed = !this.subscribed;
    },
  },
};
</script>
<style scoped lang="scss">
</style>
