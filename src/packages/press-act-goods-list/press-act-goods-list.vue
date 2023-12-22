<template>
  <div
    :class="[getActClass('goods-list'), {
      'press-act--hidden-tip': hideTipStyle,
    }, 'press-act'
    ]"
  >
    <PressList
      v-if="mGoodsList && mGoodsList.length>0"
      v-model="isLoading"
      :finished="mListIsEnd"
      :auto-check-scroller="true"
      finished-text="- 已经拉到底了 -"
      @load="loadMore"
    >
      <ul :class="[getActClass('box')]">
        <PressActGoodsItem
          v-for="(good, index) in mGoodsList"
          :key="index"
          :props-data="good"
          :use-tip-class="useTipClass"
          :hide-tip-style="hideTipStyle"
          @clickItem="gotoGoodDetail(good)"
          @clickButton="gotoGoodDetail(good)"
        />
      </ul>
    </PressList>
    <!-- 没有物品 -->
    <div
      v-else-if="mListIsEnd"
      :class="[getActClass('empty')]"
    >
      <slot name="nodata">
        <div :class="[getActClass('image')]" />
        <p>没有物品哦~</p>
      </slot>
    </div>
    <!-- 第一次加载 -->
    <div
      v-else
      style="text-align: center"
    >
      <!-- color="white" -->
      <PressLoading
        style="display: block;margin: 2rem auto 0"
      />
    </div>
  </div>
</template>
<script>
import PressList from 'press-ui/press-list/press-list.vue';
import PressLoading from 'press-ui/press-loading-plus/press-loading-plus.vue';
import PressActGoodsItem from '../press-act-goods-item/press-act-goods-item';
import { getActClass } from './utils';


export default {
  name: 'PressActGoodsList',
  options: {
    virtualHost: true,
    styleIsolation: 'shared',
  },
  components: {
    PressActGoodsItem,
    PressLoading,
    PressList,
  },
  props: {
    mListIsLoading: {
      type: Boolean,
      default: false,
      lc_desc: '是否正在加载中',
    },
    mGoodsList: {
      type: Array,
      default: () => ([]),
      lc_desc: '物品列表',
    },
    mListIsEnd: {
      type: Boolean,
      default: false,
      lc_desc: '是否到底了',
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
  emits: ['gotoGoodDetail'],
  data() {
    return {
    };
  },
  computed: {
    isLoading: {
      get() {
        return this.mListIsLoading;
      },
      set(value) {
        this.$emit('update:mListIsLoading', value);
      },
    },
  },
  watch: {
  },
  methods: {
    loadMore() {
      this.$emit('loadMore');
    },
    gotoGoodDetail(good) {
      this.$emit('gotoGoodDetail', good);
    },
    getActClass(...args) {
      return getActClass(this.useTipClass, args);
    },
  },
};
</script>

<style scoped lang="scss" src="@TIP_STYLE_NAME"></style>
<style scoped lang="scss" src="./css/base.scss"></style>
