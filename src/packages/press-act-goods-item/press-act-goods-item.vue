<template>
  <li
    :class="[getActClass('goods-item'), {
      'press-act--hidden-tip': hideTipStyle,
    }, 'press-act'
    ]"
    @click="onClickItem"
  >
    <div :class="[getActClass('content')]">
      <p :class="[getActClass('image')]">
        <img
          v-if="propsData.picurl"
          :src="propsData.picurl"
          mode="widthFix"
        >
      </p>

      <div :class="[getActClass('meta')]">
        <p :class="[getActClass('name')]">
          {{ propsData.name }}{{ propsData.benefit_tag ? propsData.benefit_tag : '' }}
        </p>
        <p :class="[getActClass('provider')]">
          {{ propsData.provider }}
        </p>
        <p
          v-if="propsData.overdueTip"
          :class="[getActClass('tip')]"
        >
          {{ propsData.overdueTip }}
        </p>
        <p
          v-else
          :class="[getActClass('description')]"
        >
          {{ propsData.deadline }}
        </p>
      </div>
      <a
        :class="getButtonStyle"
        @click.stop="onClickButton($event)"
      ><span>{{ propsData.statusText }}</span></a>
    </div>
  </li>
</template>
<script>
import { getActClass } from './utils';


export default {
  name: 'PressActGoodsItem',
  options: {
    virtualHost: true,
    styleIsolation: 'shared',
  },
  props: {
    propsData: {
      type: Object,
      default: () => ({}),
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
  computed: {
    getButtonStyle() {
      switch (this.propsData.statusStyle) {
        case 'primary':
          return this.getActClass('goods-button', 'btn--small-primary');
        case 'disabled':
          return this.getActClass('goods-button', 'btn--small-disabled');
        case 'delivered':
          return this.getActClass('goods-button', 'goods-button--delivered');
        default:
          return this.getActClass('goods-button', 'btn--small-primary');
      }
    },
  },
  methods: {
    onClickButton(event) {
      this.$emit('clickButton', event);
    },
    onClickItem() {
      this.$emit('clickItem');
    },
    getActClass(...args) {
      return getActClass(this.useTipClass, args);
    },
  },
};
</script>

<style scoped lang="scss" src="@TIP_STYLE_NAME"></style>
<style scoped lang="scss" src="./css/base.scss"></style>
