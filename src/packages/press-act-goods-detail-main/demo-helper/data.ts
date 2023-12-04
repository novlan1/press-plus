export const MOCK_GOODS_BARCODE_INFO = {
  title: '标题',
  cdkey: '123456',
  recvway: '请向营业员出示此码兑换',
  desc: '奖品描述',
  giftname: '奖品名称',
};


export const MOCK_GOODS_CODE_INFO = {
  title: '兑换码',
  recvway: '请复制兑换码，到水羊潮妆小程序-我的-兑换专区粘贴兑换',
  code: 'wzfs5185QI7E2AGQHU9',
  // wxcode: 'wxcode',
  // accountDesc: 'accountDesc',
};


export const MOCK_GOODS_DESC = [
  {
    title: '适用渠道',
    desc: '汉堡王(南山区桃园路店)等1133家门店可用',
    monify: true,
    monifyText: '>',
    onClickType: 'clickDisplayShop',
  },
  {
    title: '有效期',
    desc: '2023.12.08',
  },
  {
    title: '使用方式',
    desc: '奖励将会发放到你填写的手机名下的汉堡王会员账户，若你不是会员，将用此手机号为你注册',
    isHtml: true,
  },
  {
    title: '用券有礼',
    desc: '2023.07.20前，用券后返亲密玫瑰自选宝箱，先到先得',
  },
];


export const MOCK_GOODS_META = {
  benefitTag: '无门槛减54元',
  giftImg: 'https://igame-10037599.cos.ap-shanghai.myqcloud.com/abb33832-3b9f-c25e-a297-6799d5f564c4.png',
  giftname: '5折小皇堡10件套',
  limitTime: '2023.12.08',
  status: 'expired', // expired or used
};


export const MOCK_GOODS_Q_R_CODE_DATA = {
  title: '标题',
  code: '123456',
  main: 'https://mike-1255355338.cos.ap-guangzhou.myqcloud.com/article/2023/11/own_mike_c13ef4021db3bd9908.png',
  recvway: '请截图保存二维码,使用微信扫码兑换',
  desc: 'desc',
  giftname: 'giftname',
  url: 'https://baidu.com',
};


export const MOCK_GOODS_DETAIL_SELECT = Array.from({ length: 5 })
  .map(() => ({
    giftpic: 'https://igame-10037599.cos.ap-shanghai.myqcloud.com/abb33832-3b9f-c25e-a297-6799d5f564c4.png',
    giftname: '奖品名称',
  }));

