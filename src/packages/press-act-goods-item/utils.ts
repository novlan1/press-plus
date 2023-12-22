import { getActClass as commonGetActClass } from 'press-ui/common/utils/act-bem';

export const TIP_CLASS_MAP = {
  'goods-item': 'tip-comp-goods-status--item',
  content: 'tip-comp-goods-status--content',
  image: 'tip-comp-goods-status--img',
  meta: 'tip-comp-goods-status--baseinfo',

  name: 'tip-comp-goods-status--name',
  provider: 'tip-comp-goods-status--businessname',
  tip: 'tip-comp-goods-status--tip',
  description: 'tip-comp-goods-status--data',

  'goods-button': 'tip-comp-goods-status-btn',
  'btn--small-primary': 'tip-comp-btn-small-primary',
  'btn--small-disabled': 'tip-comp-btn-small-disabled',
  'goods-button--delivered': 'tip-comp-goods-status-btn-delivered',
};

export function getActClass(useTipClass: boolean, args: any) {
  return commonGetActClass(useTipClass, TIP_CLASS_MAP, args);
}
