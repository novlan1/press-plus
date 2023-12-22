import { getActClass as commonGetActClass } from 'press-ui/common/utils/act-bem';

export const TIP_CLASS_MAP = {
  'goods-tab': 'goods-tab',
  tabs: 'page-inner-tabs',
  'invalid-link-top': 'invalid-goods-link-top',
  'content--empty': 'mine-page-content-empty',
  content: 'mine-page-content',
  'empty-tip': 'expired-tip-text',
  inner: 'merchant-page-inner',
  'invalid-link': 'invalid-goods-link',
};

export function getActClass(useTipClass: boolean, args: any) {
  return commonGetActClass(useTipClass, TIP_CLASS_MAP, args);
}
