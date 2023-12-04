<template>
  <div
    :class="[getActClass('box'), {
      'press-act--hidden-tip': hideTipStyle,
    }, 'press-act'
    ]"
  >
    <div :class="[getActClass('select-wrap')]">
      <span>奖励介绍:</span>
      <div
        v-if="giftList"
        :class="[getActClass('list')]"
      >
        <div
          v-for="(gift, index) of giftList"
          :key="index"
          :class="[getActClass('item')]"
        >
          <div :class="[getActClass('images')]">
            <img
              v-lazy="gift.giftpic"
              :class="[getActClass('image')]"
            >
          </div>
          <div :class="[getActClass('texts')]">
            <div :class="[getActClass('text')]">
              {{ gift.giftname }}
            </div>
          </div>
          <div :class="[getActClass('float-window')]">
            <div :class="[getActClass('float-text')]">
              {{ gift.giftname }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { getActClass } from './utils';


export default {
  name: 'PressActGoodsDetailSelect',
  options: {
    virtualHost: true,
    styleIsolation: 'shared',
  },
  props: {
    giftList: {
      type: Array,
      required: true,
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
