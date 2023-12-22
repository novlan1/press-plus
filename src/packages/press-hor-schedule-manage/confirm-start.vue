<template>
  <div :class="[getActClass('left')]">
    <div :class="[getActClass('header')]">
      <div :class="[getActClass('head-helmet')]" />
      <div :class="[getActClass('head-title')]">
        和平大众赛
      </div>
      <div
        v-if="showConfirmStartOB"
        :class="[getActClass('head-ob')]"
        @click.stop="clickConfirmStartOB"
      >
        裁判观战
      </div>
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
        <press-tabs
          animated
          :class="[getActClass('match-tabs')]"
          :active="curStartRoundId"
          @change="changeTab"
        >
          <press-tab
            v-for="(tab, index) in innerRoundList"
            :key="index"
            :name="tab.value"
            :title="tab.label"
          />
        </press-tabs>

        <PressList
          v-model="curGroupLoading"
          :finished="curGroupInfo.finished"
          :immediate-check="false"
          :vertical="false"
          finished-text=""
          @load="loadMore"
        >
          <div
            :class="[getActClass('team-group')]"
          >
            <div
              v-for="(item, index) in curGroupList"
              :key="index"
              :class="[getActClass('team-item')]"
              @click.stop="clickTeamGroupCard(item, index)"
            >
              <div
                :class="[getActClass('item-top', {
                  'item-top--gray': item.finished,
                })]"
              >
                <div
                  v-if="item.finished"
                  :class="[getActClass('label-gray')]"
                >
                  已结束
                </div>
                <div :class="[getActClass('team-name')]">
                  第{{ item.groupSeq }}组
                </div>
                <div :class="[getActClass('team-desc')]">
                  {{ item.teamLen }}支队伍
                </div>
              </div>
              <div :class="[getActClass('item-bottom')]">
                <div :class="[getActClass('item-logos')]">
                  <div
                    v-for="(team, teamIndex) in item.teamList"
                    :key="getTeamKey(teamIndex, 'team')"
                    :class="[getActClass('item-logo')]"
                  >
                    <img v-lazy="team.teamAvatar">
                  </div>
                </div>
              </div>

              <div
                v-if="item.finished"
                :class="[getActClass('item-check')]"
              >
                查看成绩
                <div :class="[getActClass('icon-guide'), 'icon-guide', 'iconfont']" />
              </div>

              <div
                v-else-if="item.started || isCurRoundAllStarted"
                :class="[getActClass('item-status'), 'gray']"
              >
                第{{ item.groupSeq }}组已开赛
              </div>
              <div
                v-else-if="!disabledButton && !onlyShowDisabledButton"
                :class="[getActClass('item-status')]"
                @click.stop="startGame(item)"
              >
                第{{ item.groupSeq }}组开赛
              </div>
            </div>
          </div>
        </PressList>
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
      <!-- <div :class="[getActClass('btn-refresh')]">
        <div :class="[getActClass('icon-refresh'), 'icon-refresh', 'iconfont']" />
        重新分组
      </div> -->
      <div :class="[getActClass('btn-group')]">
        <div
          v-if="buttonText"
          :class="[getActClass('primary-btn', {
            'disabled-btn': disabledButton || isCurRoundAllStarted
          })]"
          @click.stop="startAllGame"
        >
          {{ buttonText }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { NUMBER_CHI_MAP } from 't-comm/lib/base/number/number';
import PressTab from 'press-ui/press-tab/press-tab';
import PressTabs from 'press-ui/press-tabs/press-tabs';
import PressList from 'press-ui/press-list/press-list';
import { getActClass } from './utils';
import InnerSearchTeam from './inner-search-team.vue';


export default {
  name: 'PressConfirmStart',
  components: {
    PressTab,
    PressTabs,
    PressList,
    InnerSearchTeam,
  },
  props: {
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
    disabledButton: {
      type: Boolean,
      default: false,
    },
    roundList: {
      type: Array,
      default: () => ([]),
    },
    buttonText: {
      type: String,
      default: '',
    },
    isCurRoundAllStarted: {
      type: Boolean,
      default: false,
    },
    onlyShowDisabledButton: {
      type: Boolean,
      default: false,
    },
    showConfirmStartOB: {
      type: Boolean,
      default: false,
    },
  },
  emits: [
    'changeStartRoundId',
    'loadMore',
    'search',
    'searchTeam',
    'startAllGame',
    'startGame',
    'update:loading',
  ],
  data() {
    return {
      NUMBER_CHI_MAP,
      isSearch: false,
    };
  },
  computed: {
    innerRoundList() {
      return Array.from({ length: this.roundTotal }).map((_, index) => ({
        label: `第${NUMBER_CHI_MAP[index + 1]}局`,
        value: index + 1,
      }));
    },
    curGroupInfo() {
      return this.groupMap[this.curStartRoundId];
    },
    curGroupList() {
      return this.curGroupInfo?.list || [];
    },
    curGroupLoading: {
      get() {
        return this.curGroupInfo.loading;
      },
      set(val) {
        this.$emit('update:loading', 'groupMap', val);
      },
    },
    // searchLoading: {
    //   get() {
    //     return this.searchTeamMapInGroup.loading;
    //   },
    //   set(val) {
    //     this.$emit('update:loading', 'searchTeamMapInGroup', val);
    //   },
    // },
  },
  created() {

  },
  mounted() {

  },
  methods: {
    getActClass,
    changeTab(tab) {
      this.$emit('changeStartRoundId', tab.name);
    },
    getTeamKey(a, b) {
      return `${a}-${b}`;
    },
    startGame(item) {
      if (this.disabledButton) return;

      this.$emit('startGame', item);
    },
    startAllGame() {
      if (this.disabledButton || this.isCurRoundAllStarted) return;

      this.$emit('startAllGame');
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
    loadMore() {
      this.$emit('loadMore', 'groupMap');
    },
    loadMoreInSearch() {
      this.$emit('loadMore', 'searchTeamMapInGroup');
    },
    updateLoading(key, value) {
      this.$emit('update:loading', key, value);
    },
    clickTeamGroupCard(groupItem, groupIndex) {
      this.$emit('clickTeamGroupCard', groupItem, groupIndex, this.curGroupList);
    },
    clickSearchTeamCard(team, index) {
      this.$emit('clickSearchTeamCard', team, index);
    },
    clickConfirmStartOB() {
      this.$emit('clickConfirmStartOB');
    },
  },
};
</script>

<style lang="scss" src="./css/confirm-start.scss" scoped></style>

