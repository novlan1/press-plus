<template>
  <div class="press-schedule gp-commonbg">
    <div :class="[getActClass('left')]">
      <div :class="[getActClass('header')]">
        <div :class="[getActClass('head-helmet')]" />
        <div :class="[getActClass('head-title')]">
          和平大众赛
        </div>
        <div
          v-if="teamMap.title"
          :class="[getActClass('des-text')]"
        >
          {{ teamMap.title }}
        </div>
        <div
          :class="[getActClass('close'), 'iconfont', 'icon-close-split'] "
          @click="clickClose"
        />
      </div>

      <div class="press__team-wrap">
        <InnerTeamList
          :search-team-map-in-group="teamMap"
          @update:loading="updateLoading"
          @loadMoreInSearch="loadMoreInSearch"
        />
      </div>
    </div>
  </div>
</template>
<script>
import InnerTeamList from './inner-team-list.vue';
import { getActClass } from './utils';


export default {
  components: {
    InnerTeamList,
  },
  props: {
    teamMap: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {

    };
  },
  mounted() {

  },
  methods: {
    getActClass,
    updateLoading(key, value) {
      this.$emit('update:loading', key, value);
    },
    loadMoreInSearch() {
      this.$emit('loadMoreInSearch');
    },
    clickClose() {
      this.$emit('clickClose');
    },
  },
};
</script>
<style lang="scss" src="./css/schedule-manage.scss" scoped></style>
<style scoped lang="scss">
.press__team-wrap {
  margin-top: 20px;
}
.press-schedule .press__left {
  padding-right: 0.88rem;
  .press__des-text {
    font-size: 0.4rem;
    color: #000;
    font-family: "PEACE";
    margin-right: 0.24rem;
  }
  //关闭按钮
  .icon-close-split {
    color: #000;
    font-size: 0.44rem;
  }
}

.press-schedule.gp-commonbg::v-deep {
  .press__team-item .press__item-top--with-avatar {
    height: 2.08rem;
    padding-top: 0.24rem;
  }

  .press__team-info-avatar {
    width: 1rem;
    height: 1rem;
  }
  .press__team-group {
    padding-bottom: 1.2rem;
  }
  .press__des-text {
    font-size: 0.4rem;
  }
  .press__left {
    padding: 0 0.88rem;
    .press__team-item {
      .press__item-bottom {
        height: 2.28rem;
        padding: 0.18rem 0.24rem 0.12rem;
      }
      .press__team-name {
        font-size: 0.24rem;
        margin: 0.08rem auto 0;
      }
      .press__team-num-desc {
        font-size: 0.18rem;
      }
      .press__team-desc {
        font-size: 0.18rem;
      }
      overflow: hidden;
      width: 3.32rem;
      height: 4.8rem;
      box-shadow: 0px 10px 38px 0px rgba(0, 0, 0, 0.25);
    }
  }
}
</style>
