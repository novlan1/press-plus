import { getActClass as commonGetActClass } from 'press-ui/common/utils/act-bem';

export const TIP_CLASS_MAP = {
  'goods-list': 'tip-module-goods-list--layout',
  box: 'tip-module-goods-list--box',
  empty: 'tip-module-goods-list--no-data',
  image: 'img',
};

export function getActClass(useTipClass: boolean, args: any) {
  return commonGetActClass(useTipClass, TIP_CLASS_MAP, args);
}
