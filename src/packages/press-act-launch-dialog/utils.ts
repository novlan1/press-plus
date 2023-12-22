import { getActClass as commonGetActClass } from 'press-ui/common/utils/act-bem';

export const TIP_CLASS_MAP = {
  wrap: 'tip-act-dialog-wrap',

  box: 'dialog-box',
  'box--launch': 'dialog-up-wechat',

  'icon--launch-wx': 'icon-up-wechat',
  text: 'text',
  'btn--blue': 'btn-blue',
};

export function getActClass(useTipClass: boolean, args: any) {
  return commonGetActClass(useTipClass, TIP_CLASS_MAP, args);
}
