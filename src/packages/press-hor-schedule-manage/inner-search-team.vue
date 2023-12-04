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
        >
          <div
            :class="[getActClass('item-top', {
              'item-top--gray': team.finished,
            })]"
          >
            <div
              v-if="team.finished"
              :class="[getActClass('label-gray')]"
            >
              已结束
            </div>
            <div :class="[getActClass('team-name')]">
              {{ team.teamname }}
            </div>
            <div :class="[getActClass('team-desc')]">
              <!-- {{ team.teamLen }}支队伍 -->
            </div>
          </div>
          <div :class="[getActClass('item-bottom')]">
            <div :class="[getActClass('item-logos')]">
              <div
                v-for="(member, memberIndex) in team.members"
                :key="getTeamKey(memberIndex, 'member')"
                :class="[getActClass('item-logo')]"
              >
                <img v-lazy="member.head">
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
  </div>
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
      searchInput: '',
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
    onInput(e) {
      this.$emit('search', e.target.value);
    },
    cancelSearch() {
      this.$emit('cancelSearch');
    },
    loadMoreInSearch() {
      this.$emit('loadMoreInSearch');
    },
    getTeamKey(a, b) {
      return `${a}-${b}`;
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
