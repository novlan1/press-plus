<template>
  <div :class="[getActClass('left')]">
    <div :class="[getActClass('header')]">
      <div :class="[getActClass('head-helmet')]" />
      <div :class="[getActClass('head-title')]">
        和平大众赛
      </div>
      <!-- <div :class="[getActClass('des-text')]">
        确认资格后，选手才可参赛
      </div> -->
    </div>
    <div :class="[getActClass('main')]">
      <InnerSearchTeam
        v-if="isSearch"
        :search-team-map-in-group="searchTeamMapInGroup"
        @search="search"
        @cancelSearch="cancelSearch"
        @update:loading="updateLoading"
        @loadMoreInSearch="loadMoreInSearch"
        @clickSearchTeamCard="clickSearchTeamCard"
      />

      <template v-else>
        <div :class="[getActClass('table-head')]">
          <div :class="[getActClass('table-rank')]">
            排名
          </div>
          <div :class="[getActClass('table-name')]">
            战队名称
          </div>
          <div :class="[getActClass('table-history')]">
            历史场次积分
          </div>
          <div :class="[getActClass('table-score')]">
            总积分
          </div>
          <div
            v-if="showPublishScoreOB"
            :class="[getActClass('table-operate')]"
          >
            操作
          </div>
        </div>
        <div :class="[getActClass('table-main')]">
          <!-- 历史战绩展开时team-list-item 添加team-list-item-active -->
          <PressList
            v-model="teamLoading"
            :finished="curTeamMap.finished"
            :immediate-check="false"
            finished-text="没有更多了"
            @load="loadMore"
          >
            <div
              v-for="(item, index) in curTeamScoreList"
              :key="index"
              :class="[getActClass('table-item')]"
              @click.stop="onShowScoreDetail(item, index)"
            >
              <div :class="[getActClass('table-detail')]">
                <div :class="[getActClass('table-rank')]">
                  <span
                    class="rank"
                    :class="[
                      item.rank == 1 ? 'rank1' : '',
                      item.rank == 2 ? 'rank2' : '',
                      item.rank == 3 ? 'rank3' : '',
                    ]"
                  >
                    {{ item.rank }}
                  </span>
                </div>
                <div :class="[getActClass('table-name')]">
                  <img
                    v-if="item.teamAvatar"
                    :src="item.teamAvatar"
                  >
                  <div :class="[getActClass('table-team-name')]">
                    {{ item.teamName }}
                  </div>
                </div>
                <div :class="[getActClass('table-history')]">
                  {{ item.scoreStr }}
                </div>
                <div :class="[getActClass('table-score')]">
                  {{ item.totalScore }}
                </div>
                <div
                  v-if="showPublishScoreOB"
                  :class="[getActClass('table-operate')]"
                  @click.stop="clickPublishScoreOB(item, index)"
                >
                  观战
                  <div :class="[getActClass('ob-eye')]" />
                </div>
              </div>

              <div
                v-if="showDetailMap[index]"
                :class="[getActClass('history-detail')]"
              >
                <div :class="[getActClass('history-detail-head')]">
                  <div class="text">
                    历史场次
                  </div>
                  <div class="text">
                    排名
                  </div>
                  <div class="text">
                    击杀数
                  </div>
                  <div class="text">
                    积分
                  </div>
                </div>
                <div
                  v-for="(score, scoreIndex) in (historyScoreMap[index] || [])"
                  :key="scoreIndex"
                  :class="[getActClass('history-detail-list')]"
                >
                  <div class="text">
                    <!-- 第{{ item }}场 -->
                    {{ score.roundStr }}
                  </div>
                  <div class="num">
                    {{ score.rank }}
                  </div>
                  <div class="num">
                    {{ score.kill }}
                  </div>
                  <div class="num">
                    {{ score.score }}
                  </div>
                </div>
              </div>
            </div>
          </PressList>
        </div>
      </template>
    </div>

    <div
      v-if="!isSearch"
      :class="[getActClass('footer')]"
    >
      <div
        :class="[getActClass('btn-search')]"
        @click.stop="onSearchTeam"
      >
        <div :class="[getActClass('icon-search'), 'icon-search', 'iconfont']" />
        搜索队伍
      </div>

      <div :class="[getActClass('btn-group')]">
        <div
          v-if="buttonText"
          :class="[getActClass('primary-btn', {
            'disabled-btn': disabledButton
          })]"
          @click.stop="publishScore"
        >
          {{ buttonText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NUMBER_CHI_MAP } from 't-comm/lib/base/number/number';
// import PressTab from 'press-ui/press-tab/press-tab';
// import PressTabs from 'press-ui/press-tabs/press-tabs';
import InnerSearchTeam from './inner-search-team.vue';
import { getActClass } from './utils';
import PressList from 'press-ui/press-list/press-list';


export default {
  name: 'PressPublishScore',
  components: {
    // PressTab,
    // PressTabs,
    InnerSearchTeam,
    PressList,
  },
  props: {
    curScoreRoundId: {
      type: Number,
      default: 1,
    },
    roundTotal: {
      type: Number,
      default: 1,
    },
    groupMap: {
      type: Object,
      default: () => ({}),
    },
    teamScoreMap: {
      type: Object,
      default: () => ({}),
    },
    showPublishScoreOB: {
      type: Boolean,
      default: false,
    },
    disabledButton: {
      type: Boolean,
      default: false,
    },
    searchTeamMapInGroup: {
      type: Object,
      default: () => ({}),
    },
    buttonText: {
      type: String,
      default: '公布成绩',
    },
    historyScoreMap: {
      type: Object,
      default: () => ({}),
    },
    // groupListInScore: {
    //   type: Array,
    //   default: () => ([]),
    // },
  },
  emits: [
    'changeScoreRoundId',
    'publishScore',
    'selectGroupInScore',
  ],
  data() {
    return {
      curGroupSeq: 1,
      showPopOver: false,
      showDetailMap: { 0: true },
      isSearch: false,
    };
  },
  computed: {
    teamLoading: {
      get() {
        return this.curTeamMap.loading;
      },
      set(val) {
        this.$emit('update:loading', 'teamScoreMap', val);
      },
    },
    curTeamMap() {
      return this.teamScoreMap?.[`${this.curScoreRoundId}-${this.curGroupSeq}`] || {};
    },
    curTeamScoreList() {
      const res = this.curTeamMap?.list || [];
      return res;
    },
    curGroupList() {
      const { groupMap, curScoreRoundId } = this;
      const list = groupMap[curScoreRoundId]?.list || [];
      return list.map((_, index) => ({
        label: `第${NUMBER_CHI_MAP[index + 1]}组`,
        value: index + 1,
      }));
    },
    curGroupDesc() {
      return `第${NUMBER_CHI_MAP[this.curGroupSeq]}组`;
    },
    roundList() {
      return Array.from({ length: this.roundTotal }).map((item, index) => ({
        ...item,
        label: `第${NUMBER_CHI_MAP[index + 1]}局`,
        value: index + 1,
      }));
    },
  },
  created() {

  },
  mounted() {

  },
  methods: {
    getActClass,
    changeTab(tab) {
      this.$emit('changeScoreRoundId', tab.name);
    },
    onShowSelectGroup() {
      this.showPopOver = !this.showPopOver;
    },
    selectGroupInScore(item) {
      this.$emit('selectGroupInScore', item.value);
      this.showPopOver = false;
      this.curGroupSeq = item.value;
    },
    onShowScoreDetail(item, index) {
      this.$set(this.showDetailMap, index, !this.showDetailMap[index]);
      this.$emit('clickScoreDetail', item, index);
    },
    publishScore() {
      if (this.disabledButton) return;

      this.$emit('publishScore');
    },
    onSearchTeam() {
      this.$emit('searchTeam');
      this.isSearch = true;
    },
    cancelSearch() {
      this.isSearch = false;
      this.$emit('cancelSearch');
    },
    search(value) {
      this.$emit('search', value);
    },
    loadMoreInSearch() {
      this.$emit('loadMore', 'searchTeamMapInGroup');
    },
    loadMore() {
      this.$emit('loadMore', 'teamScoreMap');
    },
    updateLoading(key, value) {
      this.$emit('update:loading', key, value);
    },
    clickSearchTeamCard(team, index) {
      this.$emit('clickSearchTeamCard', team, index);
    },
    clickPublishScoreOB(item, index) {
      console.log('[clickPublishScoreOB]', item, index);
    },
  },
};
</script>

<style lang="scss" src="./css/publish-score.scss" scoped></style>
