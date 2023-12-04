<template>
  <a
    id="copyDhmBtn"
    :data-clipboard-text="primaryCopyText"
    :class="[getActClass('btn','btn--maxlarge-primary', {
      [getActClass('btn--long-primary')]: primaryLongButton
    }), 'press-act', {
      'press-act--hidden-tip': hideTipStyle,
    }]"
    @click="clickButton"
  >{{ primaryButton }}</a>
</template>
<script>
import { getActClass } from './utils';


export default {
  name: 'PressActGoodsDetailPrimaryButton',
  options: {
    virtualHost: true,
    styleIsolation: 'shared',
  },
  props: {
    primaryButton: {
      type: String,
      default: '',
    },
    primaryLongButton: {
      type: Boolean,
      default: false,
    },
    primaryCopyText: {
      type: String,
      default: '',
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
  mounted() {
    // 临时逻辑，透传不方便
    // if (this.$route?.query?.autoclick === '1') {
    //   setTimeout(() => {
    //     this.clickButton();
    //   }, 500);
    // }
  },
  methods: {
    clickButton() {
      this.$emit('clickButton');
    },
    getActClass(...args) {
      return getActClass(this.useTipClass, args);
    },
  },
};
</script>

<style scoped lang="scss" src="@TIP_STYLE_NAME"></style>
<style scoped lang="scss" src="./css/base.scss"></style>
<style>
u-i-goods-primary-button,
press-act-goods-detail-primary-button {
  display: flex;
  flex: 1;
}
</style>
