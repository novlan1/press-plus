import { getActClass as commonGetActClass } from '../common/utils/act-bem';

export const TIP_CLASS_MAP = {
  box: 'tip-comp-goods-detail--item-box',
  title: 'tip-comp-goods-detail--title',
  content: 'tip-comp-goods-detail--content',
  'copy-num': 'tip-comp-goods-detail--copy-number',
  'qr-exchange': 'tip-comp-goods-detail--qrcode-exchange',
  'qr-img': 'tip-comp-goods-detail--qrcode-img',
  'qr-right': 'tip-comp-goods-detail--qrcode-right',
  step: 'tip-comp-goods-detail-step',
  'qr-text': 'tip-comp-goods-detail--qrcode-text',
  tips: 'tip-comp-goods-detail--time-tips',
};

export function getActClass(useTipClass, args) {
  return commonGetActClass(useTipClass, TIP_CLASS_MAP, args);
}
