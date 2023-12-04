<template>
  <div
    :class="[getActClass('main'), {
      'press-act--hidden-tip': hideTipStyle,
    }, 'press-act'
    ]"
  >
    <div :class="[getActClass('info')]">
      <slot name="desc0" />
      <slot name="code" />
      <slot name="barcode" />
      <slot name="desc1" />
      <slot name="select" />
      <div :class="[getActClass('extra')]">
        <p>*兑换物品和活动均与设备生产商Apple.Inc无关</p>
      </div>
    </div>
    <div
      v-if="hasButton"
      :class="[getActClass('button-wrap')]"
    >
      <div
        style="display: flex;"
        :class="[getActClass('buttons')]"
      >
        <slot name="primary-button" />
        <slot name="secondary-button" />
      </div>
    </div>
    <slot name="default" />
  </div>
</template>
<script>
import { getActClass } from './utils';


export default {
  name: 'PressActGoodsDetailMain',
  options: {
    virtualHost: true,
  },
  props: {
    hasButton: {
      type: Boolean,
      desc: '显示按钮区域',
      default: false,
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
  },
  methods: {
    getActClass(...args) {
      return getActClass(this.useTipClass, args);
    },
  },
};
</script>

<style scoped lang="scss" src="@TIP_STYLE_NAME"></style>
<style scoped lang="scss" src="./css/base.scss"></style>

<style>
.toast-flag-use {
  height: 0.5rem;
  font-size: 0.22rem;
  color: white;
  background: #4a4a4a;
  padding: 0.1rem;
  line-height: 0.3rem;
  font-weight: normal;
}

u-i-goods-detail-right-new,
component-goods-detail-right-new,
press-act-goods-detail-main {
  flex: 1;
  width: 100%;
  height: 100%;
}

.van-popup,
.press-popup {
  background-color: transparent !important;
}
</style>
