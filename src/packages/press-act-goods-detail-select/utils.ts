import { getActClass as commonGetActClass } from '../common/utils/act-bem';

export const TIP_CLASS_MAP = {
  box: 'tip-comp-goods-detail--item-box',
  'select-wrap': 'tip-comp-goods-select-container',
  list: 'tip-comp-scroll-list',
  item: 'tip-comp-scroll-item',
  images: 'tip-comp-image-box',
  image: 'tip-comp-image',
  texts: 'tip-comp-text-box',
  text: 'tip-comp-text',
  'float-window': 'tip-comp-float-window',
  'float-text': 'float-text',
};

export function getActClass(useTipClass, args) {
  return commonGetActClass(useTipClass, TIP_CLASS_MAP, args);
}
