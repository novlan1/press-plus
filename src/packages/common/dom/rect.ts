import { getScrollSelector } from './scroll';
import { isNotInUni } from '../utils/utils';
import { getSystemInfoSync } from '../utils/system';

export function getWindowWidth() {
  if (isNotInUni()) {
    const windowWidth = Math.min(window.innerWidth, document.documentElement.clientWidth, screen.width);
    const windowHeight = Math.min(window.innerHeight, document.documentElement.clientHeight, screen.height);

    return {
      windowWidth,
      windowHeight,
      windowTop: 0,
      windowBottom: 0,
    };
  }

  const { windowWidth, windowHeight, windowTop, windowBottom } = uni.getSystemInfoSync();

  return {
    windowWidth,
    windowHeight,
    windowTop,
    windowBottom,
  };
}


export function getStatusBarHeight() {
  if (isNotInUni()) {
    return 0;
  }

  const { statusBarHeight } = getSystemInfoSync();
  return statusBarHeight;
}


export function getScrollHeight(context: any, id: string): any {
  return new Promise((resolve) => {
    const selector = getScrollSelector(id);

    // #ifdef H5
    const el = context.$el;
    if (el) {
      const child =  el.querySelector(selector);
      if (!child) {
        resolve({});
      }
      resolve({
        scrollHeight: child.scrollHeight,
        scrollTop: child.scrollTop,
      });
      return;
    }
    // #endif

    uni.createSelectorQuery()
      .in(context)
      .select(selector)
      .fields({
        scrollOffset: true,
      }, (box) => {
        resolve(box);
      })
      .exec();
  });
}

export function getRect(context: any, selector: string): any {
  return new Promise((resolve) => {
    // #ifdef H5
    const el = context.$el;
    if (el) {
      const child =  el.querySelector(selector);
      if (!child) {
        resolve({});
      }
      const rect = child.getBoundingClientRect();
      resolve(rect);
      return;
    }
    // #endif

    uni.createSelectorQuery()
      .in(context)
      .select(selector)
      .boundingClientRect()
      .exec((rect = []) => resolve(rect[0]));
  });
}

export function getAllRect(context: any, selector: string) {
  return new Promise((resolve) => {
  // #ifdef H5
    const el = context.$el;
    if (el) {
      const children =  el.querySelectorAll(selector);
      const rect = [...children].map(item => item.getBoundingClientRect());
      resolve(rect);
      return;
    }
    // #endif

    uni.createSelectorQuery()
      .in(context)
      .selectAll(selector)
      .boundingClientRect()
      .exec((rect = []) => {
        resolve(rect[0]);
      });
  });
}

