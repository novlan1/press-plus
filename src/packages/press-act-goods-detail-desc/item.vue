<template>
  <div
    :class="[getActClass('item')]"
    @click.stop="onClickItem(propsData)"
  >
    <span v-html="propsData.title+'：'" />
    <div
      v-if="propsData.isHtml"
      :class="[getActClass('text')]"
      v-html="propsData.desc"
    />
    <div
      v-else
      :class="[getActClass('text')]"
    >
      {{ propsData.desc }}
    </div>
    <div :class="[getActClass('modify-buttons')]">
      <span
        v-if="isMpWeixinLocal && propsData.monify"
        :class="[getActClass('modify-button')]"
      >{{ propsData.monifyText ? propsData.monifyText : '修改' }}</span>
      <span
        v-else-if="propsData.monify"
        :class="[getActClass('modify-button')]"
      >{{ propsData.monifyText ? propsData.monifyText : '修改' }}</span>
    </div>
  </div>
</template>
<script>
import { getActClass } from './utils';


export default {
  name: 'PressActGoodsDetailDescItem',
  options: {
    virtualHost: true,
    styleIsolation: 'shared',
  },
  props: {
    propsData: {
      type: Object,
      default: () => ({
        title: '物品内容',
        desc: '礼包',
        onClick: null,
        isHtml: false,
        monify: true,
      }),
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
      isMpWeixinLocal: false,
    };
  },
  mounted() {
    this.isMpWeixinLocal = process?.env?.VUE_APP_PLATFORM === 'mp-weixin';
  },
  methods: {
    onClickItem(item) {
      if (item.onClick) {
        item.onClick();
      } else {
        this.$emit('onClickItem', item);
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

<style lang="scss" scoped>
.press__text {
  img {
    margin: 0.1rem 0 !important;
  }
}
</style>
