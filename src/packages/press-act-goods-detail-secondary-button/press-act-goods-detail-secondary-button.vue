<template>
  <div
    :class="[
      getActClass('', {
        [getActClass('buttons')]: onlyOneBtn
      }), {
        'press-act--hidden-tip': hideTipStyle,
      }, 'press-act',
    ]"
  >
    <a
      :class="[getActClass('btn','btn--large-secondary')]"
      @click="clickButton"
    >{{ secondaryButton }}</a>
    <slot />
  </div>
</template>
<script>
import { getActClass } from './utils';


export default {
  name: 'PressActGoodsDetailSecondaryButton',
  options: {
    virtualHost: true,
    styleIsolation: 'shared',
  },
  props: {
    secondaryButton: {
      type: String,
      default: '',
    },
    onlyOneBtn: {
      type: Boolean,
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

<style lang="scss" scoped>
.press__buttons {
  flex: 1;

  .press__btn {
    width: 100%;
    margin: 0 auto;
  }
}
</style>
