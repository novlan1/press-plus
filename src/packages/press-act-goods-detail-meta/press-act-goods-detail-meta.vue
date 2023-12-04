<template>
  <div
    :class="[getActClass('meta'), {
      'press-act--hidden-tip': hideTipStyle,
    }, 'press-act'
    ]"
  >
    <div :class="[getActClass('info')]">
      <img
        :src="propsData.giftImg"
        :class="[getActClass('img')]"
      >
      <p :class="[getActClass('name')]">
        <span>{{ propsData.giftname }}</span>
        <span :class="[getActClass('tag')]">{{ propsData.benefitTag }}</span>
      </p>
      <div
        v-if="showSubscribe"
        :class="[getActClass('order'), {
          'active': issubscribe == 1,
        }]"
        @click.stop="clickSubscribe"
      >
        <a>{{ issubscribe == 1 ?'已订阅商户福利':'订阅该商户福利' }}</a>
      </div>
    </div>
    <!-- 已使用 -->
    <!-- 已过期 -->
    <div
      v-if="propsData.status == 'used' || propsData.status == 'expired'"
      :class="[getActClass('icon-status', {
        [getActClass('icon-status--used')]: propsData.status=='used',
        [getActClass('icon-status--expired')]: propsData.status=='expired',
      }
      )]"
    />
  </div>
</template>
<script>
import { getActClass } from './utils';


export default {
  name: 'PressActGoodsDetailMeta',
  options: {
    virtualHost: true,
    styleIsolation: 'shared',
  },
  props: {
    propsData: {
      type: Object,
      default: () => ({}),
    },
    showSubscribe: {
      type: Boolean,
      default: false,
      required: false,
    },
    issubscribe: {
      type: [Boolean, Number, String],
      default: false,
      required: false,
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
  computed: {},
  methods: {
    // onClickButton(event) {
    //   this.$emit('clickButton', event);
    // },
    // onClickCard() {
    //   this.$emit('clickCard');
    // },
    clickSubscribe() {
      this.$emit('clickSubscribe');
    },
    getActClass(...args) {
      return getActClass(this.useTipClass, args);
    },
  },
};
</script>

<style scoped lang="scss" src="@TIP_STYLE_NAME"></style>
<style scoped lang="scss" src="./css/base.scss"></style>
