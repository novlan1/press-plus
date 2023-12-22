<template>
  <div>
    <div
      :class="[getActClass('search-wrap')]"
    >
      <div :class="[getActClass('search-input')]">
        <div :class="[getActClass('icon-search'), 'icon-search', 'iconfont']" />
        <input
          v-model="searchInput"
          placeholder="请输入队伍名称搜索"
          @input="onInput"
        >
      </div>
      <div
        :class="[getActClass('btn-cancel')]"
        @click.stop="cancelSearch"
      >
        取消
      </div>
    </div>

    <InnerTeamList
      :search-team-map-in-group="searchTeamMapInGroup"
      @update:loading="updateLoading"
      @loadMoreInSearch="loadMoreInSearch"
      @clickTeam="clickSearchTeamCard"
    />
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
    searchTeamMapInGroup: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
      searchInput: '',
    };
  },
  computed: {
  },
  methods: {
    getActClass,
    onInput(e) {
      this.$emit('search', e.target.value);
    },
    cancelSearch() {
      this.$emit('cancelSearch');
    },
    updateLoading(key, value) {
      this.$emit('update:loading', key, value);
    },
    loadMoreInSearch() {
      this.$emit('loadMoreInSearch');
    },
    clickSearchTeamCard(team, index) {
      this.$emit('clickSearchTeamCard', team, index);
    },
  },
};
</script>

<style lang="scss" src="./css/confirm-start.scss" scoped></style>
<style scoped lang="scss">
@import "../common/style/gp-match/mixin.scss";
.press__search-wrap {
  display: flex;
  align-items: center;
  margin: 0.36rem 0 0.18rem 0;

  .press__search-input {
    height: 0.6rem;
    flex: 1;
    display: flex;
    align-items: center;
    padding: 0 0.24rem;
    border: 0.02rem solid rgba(252, 252, 252, 0.3);
    background: linear-gradient(
      101deg,
      rgba(238, 239, 241, 0.7) 15.46%,
      rgba(252, 252, 252, 0.7) 86.92%
    );
    box-shadow: 0 0 0.2rem 0 rgba(83, 71, 134, 0.38);
    backdrop-filter: blur(0.04rem);
  }
  .press__icon-search {
    margin-right: 0.08rem;
    font-size: 0.28rem;
    color: #212124;
  }
  input {
    flex: 1;
    font-size: 0.24rem;
    color: #212124;
    &::placeholder {
      color: rgba(33, 33, 36, 0.4);
    }
  }

  .press__btn-cancel {
    padding: 0 0.08rem 0 0.32rem;
    font-size: 0.28rem;
    color: #212124;
  }
}
</style>
