<template>
  <div
    :class="[getActClass('box'), {
      'press-act--hidden-tip': hideTipStyle,
    }, 'press-act'
    ]"
  >
    <span :class="[getActClass('title')]">{{ propsData.title }}：</span>
    <div :class="[getActClass('exchange-code')]">
      <div :class="[getActClass('exchange-box')]">
        <p :class="[getActClass('barcode')]">
          <PressBarcode
            :value="propsData.cdkey"
            :height="0.7*50"
            :width="1"
            :font-size="0.3*50"
            format="CODE128"
          />
        </p>
        <p :class="[getActClass('qr')]">
          <PressQRCode
            :value="propsData.cdkey"
            :size="155"
          />
        </p>
      </div>
      <div :class="[getActClass('exchange-tips')]">
        <p :class="[getActClass('qr-text')]">
          {{ propsData.recvway }}
        </p>
        <p
          v-if="propsData.giftname"
          class=""
        >
          {{ propsData.desc }}
          <span class="">{{ propsData.giftname }}</span>，先到先得。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PressQRCode from 'press-ui/press-q-r-code/press-q-r-code.vue';
import PressBarcode from 'press-ui/press-barcode/press-barcode.vue';
import { getActClass } from './utils';


export default {
  name: 'PressActGoodsDetailBarcode',
  components: {
    PressQRCode,
    PressBarcode,
  },
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
  methods: {
    getActClass(...args) {
      return getActClass(this.useTipClass, args);
    },
  },
};
</script>

<style scoped lang="scss" src="@TIP_STYLE_NAME"></style>
<style scoped lang="scss" src="./css/base.scss"></style>
