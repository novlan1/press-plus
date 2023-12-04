import { getActClass as commonGetActClass } from '../common/utils/act-bem';

export const TIP_CLASS_MAP = {
  main: 'tip-comp-goods-detail--right-content',
  info: 'tip-comp-goods-detail--com',
  extra: 'tip-comp-goods-detail--extrainfo',
  'button-wrap': 'tip-comp-goods-detail--button',
  buttons: 'tip-comp-goods-detail--btn-cont',

  btn: 'tip-comp-goods-detail--btn',
  'btn--long-primary': 'tip-comp-btn-long-primary',
  'btn--maxlarge-primary': 'tip-comp-btn-maxlarge-primary',
  'btn--large-primary': 'tip-comp-btn-large-primary',
  'btn--large-secondary': 'tip-comp-btn-large-secondary',
  'btn--maxlarge-secondary': 'tip-comp-btn-maxlarge-secondary',
};

export function getActClass(useTipClass, args) {
  return commonGetActClass(useTipClass, TIP_CLASS_MAP, args);
}
