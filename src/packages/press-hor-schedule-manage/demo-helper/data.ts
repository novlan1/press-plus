import { MOCK_USER_META } from 'src/packages/press-message-detail/demo-helper/data';
const ROUND_TOTAL = 5;

export const getTeamList = (length: number, start = 0) => Array.from({ length }).map((_, index) => ({
  teamavatar: MOCK_USER_META.avatar,
  teamAvatar: MOCK_USER_META.avatar,
  showTeamAvatar: true,
  teamDesc: '战队宣言',

  teamname: `name-${index + 1 + start}`,
  memnum: 2,
  teamNumDesc: '人数：3/6',
  isPass: index % 5 !== 0,

  checked: true,
  disabled: index % 5 === 0,
  members: Array.from({ length: 3 }).map((_, idx) => ({
    head: MOCK_USER_META.avatar,
    nick: `${MOCK_USER_META.nick} - ${idx + 1}`,
    uid: `${index}-${idx}`,
    is_cap: idx === 0,
    rankIcon: 'https://image-1251917893.cos.ap-guangzhou.myqcloud.com/HPJY_Gamesystem_2020/DZS_2C/gp-rank/gold-4.png',
  }))
    .concat(Array.from({ length: 3 })
      .map((_, idx) => ({
        head: 'https://image-1251917893.file.myqcloud.com/tip-project/pubg/pubg-match/logo/default-avatar.png',
        nick: '',
        uid: `${index}-${idx}-3`,
        is_cap: false,
        rankIcon: '',
      }))),
}));


// const getGroupTeamList = len => Array.from({ length: len }).map(() => ({
//   teamAvatar: MOCK_USER_META.avatar,
// }));

export const getGroupList = (length = 9, start = 0) => Array.from({ length }).map((_, index) => ({
  roundId: '1',
  groupSeq: index + 1 + start,
  teamLen: index + 1,
  teamList: getTeamList(index + 1),
  started: index % 2 === 0,

  title: index % 3 == 0 ? `第1轮第${index + 1 + start}组` : '',
}));

function getGroupMap(): any {
  return Array.from({ length: ROUND_TOTAL }).reduce((acc: any, item, index) => {
    acc[index + 1] = {
      list: getGroupList(),
      finished: false,
      loading: false,
    };
    return acc;
  }, {});
}

function getRoundList() {
  return Array.from({ length: ROUND_TOTAL }).map((_, index) => ({
    roundId: index + 1,
    started: index % 2 === 0,
  }));
}

export function getTeamScoreList() {
  return Array.from({ length: 12 }).map((_, index) => ({
    teamName: `A-${index + 1}`,
    totalScore: 1,
    scoreStr: '1 | 2 | 3',
    rank: index + 1,
    historyScoreList: [
      {
        roundStr: '第一场',
        rank: 1,
        score: 2,
      },
      {
        roundStr: '第二场',
        rank: 1,
        score: 2,
      },
    ],
  }));
}

export function getDemoData() {
  const teamList = getTeamList(10);
  const groupMap = getGroupMap();
  const roundList = getRoundList();
  const toSelectNumList = Array.from({ length: teamList.length }).map((_, index) => index + 1);

  return {
    teamList,
    groupMap,
    groupList: groupMap[1].list,
    roundList,
    toSelectNumList,
  };
}
