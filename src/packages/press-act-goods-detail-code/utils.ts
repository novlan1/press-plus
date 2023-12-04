import { getActClass as commonGetActClass } from '../common/utils/act-bem';

export const TIP_CLASS_MAP = {
  box: 'tip-comp-goods-detail--item-box',

  title: 'tip-comp-goods-detail--title',
  'copy-code': 'tip-comp-goods-detail--copy-code',
  'copy-num': 'tip-comp-goods-detail--copy-number',
  'copy-tip': 'tip-comp-goods-detail--copy-code_tips',
  'copy-tip--num': 'tip-comp-goods-detail--copy-code_tips_number',
};

export function getActClass(useTipClass, args) {
  return commonGetActClass(useTipClass, TIP_CLASS_MAP, args);
}
