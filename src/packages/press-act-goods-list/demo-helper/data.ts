export const getMockGoodsList = () => Array.from({ length: 10 }).map((_, index) => {
  let statusStyle = 'primary';
  let statusText = '去使用';
  if (index % 4 == 0) {
    statusStyle = 'disabled';
    statusText = '已过期';
  } else if (index % 4 == 1) {
    statusStyle = 'delivered';
    statusText = '已使用';
  } else if (index % 4 == 2) {
    statusStyle = '';
    statusText = '去使用';
  }

  return {
    picurl: 'https://game.gtimg.cn/images/user/cp/a20190402wifiTQ/sys.png',
    name: '游戏礼包名称名称',
    benefit_tag: 'tag',
    provider: '汉堡王',
    deadline: '2020.06.25',
    overdueTip: '今日到期',
    statusText,
    statusStyle,
  };
});
