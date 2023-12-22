<template>
  <!-- 任务轮播 -->
  <div class="press-report">
    <swiper
      class="press-report__swiper"
      :autoplay="true"
      :circular="true"
      :vertical="true"
      :interval="reportInterval"
    >
      <swiper-item
        v-for="(item, index) in reportList"
        :key="index"
      >
        <div
          class="press-report__item"
          @click.stop="clickReport(item, index)"
        >
          <div class="press-report__icon" />
          <div
            v-if="isString(item)"
          >
            {{ item }}
          </div>

          <template v-else>
            <div class="press-report__name">
              {{ item.name }}
            </div>
            已获得
            <div class="press-report__award">
              {{ item.award }}
            </div>
          </template>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
export default {
  props: {
    reportList: {
      type: Array,
      default: () => [],
      required: false,
    },
    reportInterval: {
      type: Number,
      default: 1000,
    },
  },
  emits: ['clickReport'],
  data() {
    return {

    };
  },
  methods: {
    clickReport(item, index) {
      this.$emit('clickReport', item, index);
    },
    isString(item) {
      return typeof item === 'string';
    },
  },
};

</script>
<style lang="scss" scoped src="./css/report.scss"></style>
