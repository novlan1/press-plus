<template>
  <div
    :class="[getActClass('goods-tab'), {
      'press-act--hidden-tip': hideTipStyle,
    }, 'press-act'
    ]"
  >
    <div :class="[getActClass('tabs')]">
      <p
        v-for="(goodsStatus, gindex) in goodsStatusType"
        :key="gindex"
        :class="{current:mGoodsSelectTab==gindex,' red-point':goodsStatus.redDot}"
        @click="goodsSelectTabClick(gindex)"
      >
        {{ goodsStatus.text }}{{ goodsStatus.total ? '(' + goodsStatus.total + ')' : '' }}
      </p>
    </div>
    <a
      :class="[getActClass('invalid-link-top')]"
      @click.stop="gotoExpiredGoods"
    >查看已失效的物品 &gt;</a>
    <div
      :class="[getActClass('content', {
        [getActClass('content--empty')]: isEmptyContent
      })]"
    >
      <p
        v-if="myGoodsTabTip"
        :class="[getActClass('empty-tip')]"
      >
        {{ myGoodsTabTip }}
      </p>
      <div :class="[getActClass('inner')]">
        <slot />
      </div>
      <a
        :class="[getActClass('invalid-link')]"
        @click.stop="gotoExpiredGoods"
      >查看已失效的物品 &gt;</a>
    </div>
  </div>
</template>
<script>
import { getActClass } from './utils';


export default {
  name: 'PressActGoodsTab',
  options: {
    virtualHost: true,
    styleIsolation: 'shared',
  },
  props: {
    mGoodsSelectTab: {
      type: Number,
      default: -1,
      lc_desc: '当前Tab',
    },
    goodsStatusType: {
      type: Array,
      default: () => ([    // 查询的物品状态：0:查所有 2是已发放(成功和失败)，4是未发放且未过期，6是未发放且已过期 自定义 7即将过期 8新到 9游戏礼包
        { text: '全部', status: 4, total: 0 },
        { text: '即将过期', status: 7, total: 0 },
        { text: '新到', status: 8, total: 0 },
        { text: '游戏礼包', status: 9, total: 0 },
      ]),
      lc_desc: '物品状态列表',
    },
    isEmptyContent: {
      type: Boolean,
      default: false,
      lc_desc: '是否为空',
    },
    myGoodsTabTip: {
      type: String,
      default: '',
      lc_desc: '提示',
    },
    useTipClass: {
      type: Boolean,
      default: false,
    },
    hideTipStyle: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    goodsSelectTabClick(tab) {
      this.$emit('goodsSelectTabClick', tab);
    },
    gotoExpiredGoods() {
      this.$emit('gotoExpiredGoods');
    },
    getActClass(...args) {
      return getActClass(this.useTipClass, args);
    },
  },
};
</script>

<style scoped lang="scss" src="@TIP_STYLE_NAME"></style>
<style scoped lang="scss" src="./css/base.scss"></style>
