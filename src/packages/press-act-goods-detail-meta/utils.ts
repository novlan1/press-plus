import { getActClass as commonGetActClass } from 'press-ui/common/utils/act-bem';

export const TIP_CLASS_MAP = {
  meta: 'tip-comp-goods-detail--leftslide',
  info: 'tip-comp-goods-detail--info',
  img: 'tip-comp-goods-detail--giftimg',
  name: 'tip-comp-goods-detail--giftname',
  tag: 'tip-comp-goods-detail--gift',
  order: 'tip-comp-brandmerchants--remind',

  'icon-status': 'tip-comp-goods-detail--icon-use',
  'icon-status--used': 'tip-comp-goods-detail--icon-used',
  'icon-status--expired': 'tip-comp-goods-detail--icon-expired',
};

export function getActClass(useTipClass: boolean, args: any) {
  return commonGetActClass(useTipClass, TIP_CLASS_MAP, args);
}
