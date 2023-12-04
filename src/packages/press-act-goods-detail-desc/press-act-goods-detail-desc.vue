<template>
  <div
    :class="[getActClass('list'), {
      'press-act--hidden-tip': hideTipStyle,
    }, 'press-act'
    ]"
  >
    <UIDescItem
      v-for="(item, index) in propsData"
      :key="index"
      :props-data="item"
      :use-tip-class="useTipClass"
      :hide-tip-style="hideTipStyle"
      @onClickItem="onClickItem(item)"
    />
  </div>
</template>
<script>
import UIDescItem from './item.vue';
import { getActClass } from './utils';


export default {
  name: 'PressActGoodsDetailDesc',
  components: {
    UIDescItem,
  },
  options: {
    virtualHost: true,
    styleIsolation: 'shared',
  },
  props: {
    propsData: {
      type: Array,
      default: () => ([{}]),
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
    onClickItem(item) {
      this.$emit('onClickItem', item);
    },
    getActClass(...args) {
      return getActClass(this.useTipClass, args);
    },
  },
};
</script>

<style scoped lang="scss" src="@TIP_STYLE_NAME"></style>
<style scoped lang="scss" src="./css/base.scss"></style>
