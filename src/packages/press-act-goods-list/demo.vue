<template>
  <div
    class="demo-wrap demo-wrap--gray"
    :class="curGameClass"
  >
    <ActDemo
      :custom-style-str="styleMap[customStyle] && styleMap[customStyle].label"
      :show.sync="show"
      :hide-tip-style.sync="hideTipStyle"
      :use-tip-class.sync="useTipClass"
      @onCustom="onCustom"
    >
      <PressActGoodsList
        :show.sync="show"
        :hide-tip-style.sync="hideTipStyle"
        :use-tip-class.sync="useTipClass"
        :m-list-is-loading.sync="dataMap.loading"
        :m-list-is-end="dataMap.finished"
        :m-goods-list="dataMap.list"
        @loadMore="loadMore"
        @gotoGoodDetail="gotoGoodDetail"
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
import PressActGoodsList from 'src/packages/press-act-goods-list/press-act-goods-list.vue';
import { getActCustomStyleMixin } from 'src/utils/mixin/act-custom-style.ts';
import { STYLE_LIST } from 'src/packages/press-act-goods-list/demo-helper/style-list';
import { getMockGoodsList } from 'src/packages/press-act-goods-list/demo-helper/data';


export default {
  components: {
    PressActGoodsList,
    ActDemo,
  },
  mixins: [
    getActCustomStyleMixin([
      'PressActGoodsList',
      'PressActGoodsItem',
    ], STYLE_LIST, 'pvp-vertical'),
  ],
  data() {
    return {
      show: true,
      dataMap: {
        loading: false,
        finished: false,
        list: [],
      },
    };
  },
  mounted() {
    setTimeout(() => {
      this.dataMap.list = this.dataMap.list.concat(getMockGoodsList());
    }, 300);
  },
  methods: {
    loadMore() {
      console.log('[loadMore]');
      this.onGTip('[loadMore]');

      setTimeout(() => {
        this.dataMap.list = this.dataMap.list.concat(getMockGoodsList());
        this.dataMap.loading = false;
        if (this.dataMap.list.length > 60) {
          this.dataMap.finished = true;
        }
      }, 2000);
    },
    gotoGoodDetail(goodsItem) {
      console.log('[gotoGoodDetail]', goodsItem);
      this.onGTip('[gotoGoodDetail]');
    },
  },
};
</script>
<style scoped lang="scss">
</style>
