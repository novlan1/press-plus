<template>
  <div
    :class="[getActClass('box'), {
      'press-act--hidden-tip': hideTipStyle,
    }, 'press-act'
    ]"
  >
    <span :class="[getActClass('title')]">{{ propsData.title }}：</span>
    <div :class="[getActClass('content')]">
      <p
        v-if="propsData.url"
        :class="[getActClass('copy-num')]"
        style="word-break: break-all;height: auto;"
      >
        {{ propsData.url }}
      </p>
      <div :class="[getActClass('qr-exchange')]">
        <p
          v-if="propsData.code"
          :class="[getActClass('qr-img')]"
        >
          <PressQRcode
            :value="propsData.code"
          />
        </p>
        <p
          v-else-if="propsData.main"
          :class="[getActClass('qr-img')]"
        >
          <img
            v-lazy="propsData.main"
          >
        </p>
        <div :class="[getActClass('qr-right')]">
          <!-- <p :class="[getActClass('step')]">
        使用步骤
      </p> -->
          <p :class="[getActClass('qr-text')]">
            {{ propsData.recvway }}
          </p>
          <!-- <p
            v-if="propsData.giftname"
            :class="[getActClass('tips')]"
          >
            {{ propsData.desc }}<span>{{ propsData.giftname }}</span>，先到先得。
          </p> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import PressQRcode from 'press-ui/press-q-r-code/press-q-r-code.vue';
import { getActClass } from './utils';


export default {
  name: 'PressActGoodsDetailQRCode',
  options: {
    virtualHost: true,
    styleIsolation: 'shared',
  },
  components: {
    PressQRcode,
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
