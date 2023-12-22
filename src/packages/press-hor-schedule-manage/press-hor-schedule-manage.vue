<template>
  <div class="press-schedule gp-commonbg">
    <TeamList
      v-if="showTeamList"
      :team-map="teamMapInOneGroup"
      @clickClose="showTeamList = false"
    />

    <template v-else>
      <RightBar
        :tab-index="tabIndex"
        :orig-bar-list="barList"
        @changeTab="changeTab"
        @close="close"
      />
      <!-- 确认资格 -->
      <ConfirmMember
        v-show="tabIndex == 0"
        :team-map="teamMap"
        :search-team-map="searchTeamMap"
        :team-total="teamTotal"
        :checked-team-total="checkedTeamTotal"
        :is-search="isSearch"
        :is-all-confirmed="isAllConfirmed"
        :disabled-button="disableCurrentButton"
        :button-text="confirmMemberButtonText"
        :cancel-button-text="confirmMemberCancelButtonText"
        @search="onSearch"
        @checkTeam="checkTeam"
        @onClickSearch="onClickSearch"
        @cancelSearch="cancelSearch"
        @toggleAllQualification="toggleAllQualification"
        @doneConfirmSignUp="doneConfirmSignUp"
        @loadMore="loadMore"
        @update:loading="updateLoading"
      />
      <!-- 队伍分组 -->
      <TeamGrouping
        v-show="tabIndex == 1"
        :num-per-group="numPerGroup"
        :to-select-num-list="toSelectNumList"
        :group-num="groupNum"
        :group-list-map="groupListMap"
        :disabled-button="disableCurrentButton"
        :search-team-map-in-group="searchTeamMapInGroup"
        :button-text="teamGroupingButtonText"
        @selectNumPerGroup="selectNumPerGroup"
        @confirmAdjustGroup="confirmAdjustGroup"
        @loadMore="loadMore"
        @update:loading="updateLoading"
        @search="searchTeamGroup"
        @clickTeamGroupCard="clickTeamGroupCard"
        @clickSearchTeamCard="clickSearchTeamCard"
        @cancelSearch="cancelSearch"
      />
      <!-- 确认开赛 -->
      <ConfirmStart
        v-show="tabIndex == 2"
        :round-total="roundTotal"
        :group-map="groupMap"
        :search-team-map-in-group="searchTeamMapInGroup"
        :cur-start-round-id="curStartRoundId"
        :disabled-button="disableCurrentButton"
        :round-list="roundList"
        :is-cur-round-all-started="isCurRoundAllStarted"
        :button-text="confirmStartButtonText"
        :only-show-disabled-button="confirmStartOnlyDisabledButton"
        :show-confirm-start-o-b="showConfirmStartOB"
        @changeStartRoundId="changeStartRoundId"
        @startGame="startGame"
        @startAllGame="startAllGame"
        @search="searchTeamGroup"
        @loadMore="loadMore"
        @update:loading="updateLoading"
        @clickTeamGroupCard="clickTeamGroupCard"
        @clickSearchTeamCard="clickSearchTeamCard"
        @cancelSearch="cancelSearch"
        @clickConfirmStartOB="clickConfirmStartOB"
      />
      <!-- 公布成绩 -->
      <ShowScore
        v-show="tabIndex == 3"
        :round-total="roundTotal"
        :cur-score-round-id="curScoreRoundId"
        :group-map="groupMap"
        :team-score-map="teamScoreMap"
        :disabled-button="publishedScore"
        :search-team-map-in-group="searchTeamMapInGroup"
        :button-text="publishScoreButtonText"
        :show-publish-score-o-b="showPublishScoreOB"
        :history-score-map="historyScoreMap"
        @selectGroupInScore="selectGroupInScore"
        @publishScore="publishScore"
        @changeScoreRoundId="changeScoreRoundId"
        @search="searchTeamGroup"
        @update:loading="updateLoading"
        @loadMore="loadMore"
        @clickScoreDetail="clickScoreDetail"
        @clickSearchTeamCard="clickSearchTeamCard"
        @cancelSearch="cancelSearch"
        @clickPublishScoreOB="clickPublishScoreOB"
      />
    </template>
  </div>
</template>

<script>
import { NUMBER_CHI_MAP } from 't-comm/lib/base/number/number';
import RightBar from './right-bar';
import ConfirmStart from './confirm-start';
import ConfirmMember from './confirm-member';
import ShowScore from './publish-score';
import TeamGrouping from './team-grouping';
import TeamList from './team-list';

const TAB_MAP = {
  CONFIRM_MEMBER: 0,
  TEAM_GROUPING: 1,
  CONFIRM_START: 2,
  PUBLISH_SCORE: 3,
};

export default {
  name: 'PressHorScheduleManage',
  options: {
    styleIsolation: 'shared',
  },
  components: {
    RightBar,
    ConfirmStart,
    ConfirmMember,
    ShowScore,
    TeamGrouping,
    TeamList,
  },
  props: {
    tabIndex: {
      type: Number,
      default: 0,
    },
    curGoingTab: {
      type: Number,
      default: 0,
    },
    teamMap: {
      type: Object,
      default: () => ({}),
    },
    searchTeamMap: {
      type: Object,
      default: () => ({}),
    },
    isAllConfirmed: {
      type: Boolean,
      default: false,
    },
    teamTotal: {
      type: Number,
      default: 0,
    },
    checkedTeamTotal: {
      type: Number,
      default: 0,
    },
    numPerGroup: {
      type: Number,
      default: 1,
    },
    toSelectNumList: {
      type: Array,
      default: () => [1],
    },
    groupNum: {
      type: Number,
      default: 0,
    },
    groupListMap: {
      type: Object,
      default: () => ({}),
    },
    // groupList: {
    //   type: Array,
    //   default: () => ([]),
    // },
    roundTotal: {
      type: Number,
      default: 1,
    },
    groupMap: {
      type: Object,
      default: () => ({}),
    },
    searchTeamMapInGroup: {
      type: Object,
      default: () => ({}),
    },
    curStartRoundId: {
      type: Number,
      default: 1,
    },
    curScoreRoundId: {
      type: Number,
      default: 1,
    },
    teamScoreMap: {
      type: Object,
      default: () => ({}),
    },
    roundList: {
      type: Array,
      default: () => ([]),
    },
    publishedScore: {
      type: Boolean,
      default: false,
    },
    teamMapInOneGroup: {
      type: Object,
      default: () => ({}),
    },
    onlyShowDisabledButton: {
      type: Array,
      default: () => ([]),
    },
    showConfirmStartOB: {
      type: Boolean,
      default: false,
    },
    showPublishScoreOB: {
      type: Boolean,
      default: false,
    },
    historyScoreMap: {
      type: Object,
      default: () => ({}),
    },
  },
  emits: [
    'changeScoreRoundId',
    'changeStartRoundId',
    'changeTab',
    'checkTeam',
    'clickSearch',
    'close',
    'confirmAdjustGroup',
    'doneConfirmSignUp',
    'loadMore',
    'publishScore',
    'search',
    'searchTeamGroup',
    'selectGroupInScore',
    'selectNumPerGroup',
    'startAllGame',
    'startGame',
    'toggleAllQualification',
    'update:loading',
  ],
  data() {
    return {
      barList: ['确认资格', '队伍分组', '确认开赛', '公布成绩'],
      isSearch: false,

      showTeamList: false,
      curTeamMap: {
        list: [],
        loading: false,
        finished: true,
        title: '',
      },
    };
  },
  computed: {
    roundMap() {
      return this.roundList.reduce((acc, item) => {
        acc[item.roundId] = item;
        return acc;
      }, {});
    },
    isCurRoundAllStarted() {
      const { roundMap, curStartRoundId } = this;
      return roundMap[curStartRoundId]?.started;
    },
    disableCurrentButton() {
      const { curGoingTab, tabIndex } = this;
      return curGoingTab > tabIndex;
    },
    confirmMemberButtonText() {
      const { disableCurrentButton, onlyShowDisabledButton } = this;
      if (onlyShowDisabledButton.indexOf(TAB_MAP.CONFIRM_MEMBER) > -1) {
        return disableCurrentButton ? '已确认资格' : '';
      }
      return disableCurrentButton ? '已确认资格' : '确认资格';
    },
    confirmMemberCancelButtonText() {
      const { isAllConfirmed, onlyShowDisabledButton } = this;
      if (onlyShowDisabledButton.indexOf(TAB_MAP.CONFIRM_MEMBER) > -1) {
        return '';
      }
      return isAllConfirmed ? '全部取消' : '全部确认';
    },
    teamGroupingButtonText() {
      const { disableCurrentButton, onlyShowDisabledButton } = this;
      if (onlyShowDisabledButton.indexOf(TAB_MAP.TEAM_GROUPING) > -1) {
        return disableCurrentButton ? '已完成分组' : '';
      }
      return disableCurrentButton ? '已完成分组' : '确认分组';
    },
    confirmStartButtonText() {
      const {
        curStartRoundId,
        isCurRoundAllStarted,
        disableCurrentButton,
        onlyShowDisabledButton,
      } = this;
      const number = NUMBER_CHI_MAP[curStartRoundId];
      const canStart = `第${number}局全部开赛`;
      const cannotStart = `第${number}局已全部开赛`;

      if (onlyShowDisabledButton.indexOf(TAB_MAP.CONFIRM_START) > -1) {
        return disableCurrentButton || isCurRoundAllStarted ? cannotStart : '';
      }
      return disableCurrentButton || isCurRoundAllStarted ? cannotStart : canStart;
    },
    publishScoreButtonText() {
      const {
        publishedScore,
        onlyShowDisabledButton,
      } = this;
      if (onlyShowDisabledButton.indexOf(TAB_MAP.PUBLISH_SCORE) > -1) {
        return publishedScore ? '已公布成绩' : '';
      }
      return publishedScore ? '已公布成绩' : '公布成绩';
    },
    confirmStartOnlyDisabledButton() {
      return this.onlyShowDisabledButton.indexOf(2) > -1;
    },
  },
  created() {
  },
  mounted() {

  },
  methods: {
    close() {
      this.$emit('close');
    },
    changeTab(index) {
      this.$emit('changeTab', index);
    },
    toggleAllQualification() {
      this.$emit('toggleAllQualification');
    },
    doneConfirmSignUp() {
      this.$emit('doneConfirmSignUp');
    },
    checkTeam(team, index) {
      this.$emit('checkTeam', team, index);
    },
    selectNumPerGroup(num) {
      this.$emit('selectNumPerGroup', num);
    },
    confirmAdjustGroup() {
      this.$emit('confirmAdjustGroup');
    },
    changeStartRoundId(roundId) {
      this.$emit('changeStartRoundId', roundId);
    },
    changeScoreRoundId(roundId) {
      this.$emit('changeScoreRoundId', roundId);
    },
    startGame(item) {
      this.$emit('startGame', item);
    },
    startAllGame() {
      this.$emit('startAllGame');
    },
    publishScore() {
      this.$emit('publishScore');
    },
    onSearch(value) {
      this.$emit('search', value);
    },
    onClickSearch() {
      this.isSearch = true;
      this.$emit('clickSearch');
    },
    searchTeamGroup(value) {
      this.$emit('searchTeamGroup', value);
    },
    selectGroupInScore(value) {
      this.$emit('selectGroupInScore', value);
    },
    loadMore(key) {
      this.$emit('loadMore', key);
    },
    updateLoading(key, value) {
      this.$emit('update:loading', key, value);
    },
    clickTeamGroupCard(groupItem, groupIndex, groupList) {
      // const { teamList, groupSeq, teamLen } = groupItem;
      // this.$set(this.curTeamMap, 'list', teamList);
      // this.$set(this.curTeamMap, 'title', `第${groupSeq}组-${teamLen}支队伍`);

      this.showTeamList = true;

      this.$emit('clickTeamGroupCard', groupItem, groupIndex, groupList);
    },
    clickSearchTeamCard(team, index) {
      this.showTeamList = true;
      this.$emit('clickSearchTeamCard', team, index);
    },
    clickScoreDetail(scoreItem, scoreIndex) {
      this.$emit('clickScoreDetail', scoreItem, scoreIndex);
    },
    cancelSearch() {
      this.$emit('cancelSearch');
      this.isSearch = false;
    },
    clickConfirmStartOB() {
      this.$emit('clickConfirmStartOB');
    },
    clickPublishScoreOB(item, index) {
      console.log('[clickPublishScoreOB]', item, index);
    },
  },
};
</script>

<style lang="scss" src="./css/schedule-manage.scss" scoped></style>
