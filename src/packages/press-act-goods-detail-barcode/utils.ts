import { getActClass as commonGetActClass } from 'press-ui/common/utils/act-bem';

export const TIP_CLASS_MAP = {
  box: 'tip-comp-goods-detail--item-box',

  title: 'tip-comp-goods-detail--title',
  'exchange-code': 'tip-comp-goods-detail--exchangecode',
  'exchange-box': 'tip-comp-goods-detail--exchange_box',
  barcode: 'tip-comp-goods-detail--barcode',
  qr: 'tip-comp-goods-detail--qrcode',
  'exchange-tips': 'tip-comp-goods-detail--exchangecode-tips',
  'qr-text': 'tip-comp-goods-detail--qrcode-text',
};

export function getActClass(useTipClass: boolean, args: any) {
  return commonGetActClass(useTipClass, TIP_CLASS_MAP, args);
}
