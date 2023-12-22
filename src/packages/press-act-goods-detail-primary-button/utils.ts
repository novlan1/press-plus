import { getActClass as commonGetActClass } from 'press-ui/common/utils/act-bem';

export const TIP_CLASS_MAP = {
  'btn--long-primary': 'tip-comp-btn-long-primary',
  btn: 'tip-comp-goods-detail--btn',
  'btn--maxlarge-primary': 'tip-comp-btn-maxlarge-primary',
};

export function getActClass(useTipClass: boolean, args: any) {
  return commonGetActClass(useTipClass, TIP_CLASS_MAP, args);
}
