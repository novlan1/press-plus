import { getActClass as commonGetActClass } from 'press-ui/common/utils/act-bem';

export const TIP_CLASS_MAP = {
  list: 'tip-comp-goods-detail--list',
  item: 'tip-comp-goods-detail--item',
  text: 'tip-comp-goods-detail--text',
  'modify-buttons': 'tip-comp-goods-detail--modify-btn-layout',
  'modify-button': 'monify-address-button',
};

export function getActClass(useTipClass: boolean, args: any) {
  return commonGetActClass(useTipClass, TIP_CLASS_MAP, args);
}
