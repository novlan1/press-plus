import { getActClass as commonGetActClass } from '../common/utils/act-bem';

export const TIP_CLASS_MAP = {
  buttons: 'tip-comp-btn',
  btn: 'tip-comp-goods-detail--btn',
  'btn--large-secondary': 'tip-comp-btn-large-secondary',
};

export function getActClass(useTipClass, args) {
  return commonGetActClass(useTipClass, TIP_CLASS_MAP, args);
}
