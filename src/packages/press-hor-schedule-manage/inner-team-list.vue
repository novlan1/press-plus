<template>
  <PressList
    v-model="searchLoading"
    :finished="searchTeamMapInGroup.finished"
    :immediate-check="false"
    :vertical="false"
    finished-text=""
    @load="loadMoreInSearch"
  >
    <div
      :class="[getActClass('team-group')]"
    >
      <div
        v-for="(team, index) in searchTeamMapInGroup.list"
        :key="index"
        :class="[getActClass('team-item')]"
        @click.stop="clickTeam(team, index)"
      >
        <div
          :class="[getActClass('item-top', {
            'item-top--gray': team.finished,
            'item-top--with-avatar': team.teamAvatar && team.showTeamAvatar
          })]"
        >
          <div
            v-if="team.finished"
            :class="[getActClass('label-gray')]"
          >
            已结束
          </div>
          <img
            v-if="team.teamAvatar && team.showTeamAvatar"
            v-lazy="team.teamAvatar"
            class="press__team-info-avatar"
          >
          <div :class="[getActClass('team-name')]">
            {{ team.teamname }}
          </div>
          <div :class="[getActClass('team-desc')]">
            <!-- {{ team.teamLen }}支队伍 -->
            {{ team.teamDesc || '' }}
          </div>
        </div>

        <p
          v-if="team.teamNumDesc"
          class="press__team-num-desc"
        >
          {{ team.teamNumDesc || '' }}
        </p>

        <div :class="[getActClass('item-bottom')]">
          <div :class="[getActClass('item-logos')]">
            <div
              v-for="(member, memberIndex) in team.members"
              :key="getTeamKey(memberIndex, 'member')"
              :class="[getActClass('item-logo')]"
            >
              <div
                v-if="member.is_cap"
                class="press__label-leader"
              >
                队长
              </div>
              <img v-lazy="member.head">

              <img
                v-if="member.rankIcon"
                v-lazy="member.rankIcon"
                class="press__team-member-rank"
              >
            </div>
          </div>
        </div>

        <!-- <div
            v-if="item.finished"
            :class="[getActClass('item-check')]"
          >
            查看成绩
            <div :class="[getActClass('icon-guide'), 'icon-guide', 'iconfont']" />
          </div>

          <div
            v-else-if="item.started"
            :class="[getActClass('item-status'), 'gray']"
          >
            第{{ item.groupSeq }}组已开赛
          </div>
          <div
            v-else
            :class="[getActClass('item-status')]"
            @click.stop="startGame(item)"
          >
            第{{ item.groupId }}组开赛
          </div> -->
      </div>
    </div>
  </PressList>
</template>
<script>
import PressList from 'press-ui/press-list/press-list';
import { getActClass } from './utils';


export default {
  components: {
    PressList,
  },
  props: {
    searchTeamMapInGroup: {
      type: Object,
      default: () => ({}),
    },
  },
  data() {
    return {
    };
  },
  computed: {
    searchLoading: {
      get() {
        return this.searchTeamMapInGroup.loading;
      },
      set(val) {
        this.$emit('update:loading', 'searchTeamMapInGroup', val);
      },
    },
  },
  methods: {
    getActClass,
    loadMoreInSearch() {
      this.$emit('loadMoreInSearch');
    },
    getTeamKey(a, b) {
      return `${a}-${b}`;
    },
    clickTeam(team, teamIndex) {
      this.$emit('clickTeam', team, teamIndex);
    },
  },
};
</script>

<style lang="scss" src="./css/confirm-start.scss" scoped></style>
<style scoped lang="scss">
.press__team-num-desc {
  color: rgba(33, 33, 36, 0.5);
  font-family: PingFang SC;
  font-size: 0.22rem;
  font-style: normal;
  font-weight: 400;
  text-align: right;
  width: 100%;
  line-height: 0.26rem;
  padding: 0.18rem 0.22rem 0;
  background: #fff;
}

.press__item-logo {
  position: relative;
}

.press__label-leader {
  position: absolute;
  left: 0;
  top: -0.04rem;
  width: 0.62rem;
  height: 0.22rem;
  padding-left: 0.08rem;
  font-family: "PEACE";
  font-size: 0.16rem;
  background: #ffcc00;
  color: #2e3438;
  clip-path: polygon(0 0, 100% 0%, 73% 100%, 0% 100%);
  z-index: 1;
}

.press__team-info-avatar {
  width: 0.9rem;
  object-fit: cover;
}

.press__team-group .press__team-item .press__team-member-rank {
  position: absolute;
  right: -0.1rem;
  bottom: -0.1rem;
  width: 0.28rem;
  height: auto;
  object-fit: cover;
}
</style>
