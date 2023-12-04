<template>
  <div
    :class="[getActClass('box'), {
      'press-act--hidden-tip': hideTipStyle,
    }, 'press-act'
    ]"
  >
    <span :class="[getActClass('title')]">{{ propsData.title }}：</span>
    <div :class="[getActClass('copy-code')]">
      <div :class="[getActClass('copy-tip')]">
        <span>{{ propsData.recvway }}</span>
      </div>
      <p
        v-if="propsData.code"
        :class="[getActClass('copy-num')]"
      >
        <span>{{ propsData.code }}</span>
      </p>

      <p
        v-if="propsData.wxcode"
        :class="[getActClass('copy-num')]"
      >
        <span>{{ propsData.wxcode }}</span>
      </p>
      <div
        v-if="propsData.accountDesc"
        :class="[getActClass('copy-tip','copy-tip--num')]"
      >
        {{ propsData.accountDesc }}
        <a
          v-if="!hideModify"
          @click="onClickModify"
        >修改</a>
      </div>
    </div>
    <slot />
  </div>
</template>
<script>
import { getActClass } from './utils';

export default {
  name: 'PressActGoodsDetailCode',
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
  data() {
    return {
      hideModify: false,
    };
  },
  mounted() {
    this.hideModify = process?.env?.VUE_APP_PLATFORM === 'mp-weixin';
  },
  methods: {
    onClickModify() {
      if (this.propsData.changeAccount) {
        this.propsData.changeAccount();
      } else {
        this.$emit('onClickItem', this.propsData);
      }
    },
    getActClass(...args) {
      return getActClass(this.useTipClass, args);
    },
  },
};
</script>

<style scoped lang="scss" src="@TIP_STYLE_NAME"></style>
<style scoped lang="scss" src="./css/base.scss"></style>
