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
      <PressActGoodsItem
        :show.sync="show"
        :hide-tip-style.sync="hideTipStyle"
        :use-tip-class.sync="useTipClass"
        :props-data="mockData"
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
import PressActGoodsItem from 'src/packages/press-act-goods-item/press-act-goods-item.vue';
import { getActCustomStyleMixin } from 'src/utils/mixin/act-custom-style.ts';
import { STYLE_LIST } from 'src/packages/press-act-goods-item/demo-helper/style-list';

const mockData = {
  picurl: 'https://game.gtimg.cn/images/user/cp/a20190402wifiTQ/sys.png',
  name: '游戏礼包名称名称',
  benefit_tag: 'tag',
  provider: '汉堡王',
  deadline: '2020.06.25',
  overdueTip: '今日到期',
  statusText: '去使用',
  statusStyle: 'primary',
};

export default {
  components: {
    PressActGoodsItem,
    ActDemo,
  },
  mixins: [
    getActCustomStyleMixin('PressActGoodsItem', STYLE_LIST, 'pvp-vertical'),
  ],
  data() {
    return {
      show: true,
      mockData,
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
