import { getRect } from './rect';

function getScrollInfo(id: string, event: any, key = 'scrollTop') {
  let result: Element[keyof Element] = 0;
  // #ifdef H5
  const wrap = document.querySelector(`#${id}`);
  result = wrap?.[key as keyof Element] || 0;
  // #endif

  // #ifndef H5
  result = event.detail[key];
  // #endif
  return result;
}

export function getScrollTop(id: string, event: Event) {
  return getScrollInfo(id, event, 'scrollTop');
}

export function getScrollHeight(id: string, event: Event) {
  return getScrollInfo(id, event, 'scrollHeight');
}

export function holdWhenScroll({
  context,
  eleId,
  targetId,
  scrollHeight,
  scrollTopThreshold,
}: any) {
// #ifdef H5
  const wrap = document.querySelector(`#${eleId}`);
  if (wrap) {
    wrap.scrollTop = wrap.scrollHeight - scrollHeight + scrollTopThreshold;
  }
  // #endif

  // #ifndef H5
  const view = uni.createSelectorQuery()
    .in(context)
    .select(`#${eleId}`);
  context.scrollWithAnimation = false;

  view
    // @ts-ignore
    .node()
    .exec((res) => {
      const scrollView = res[0]?.node;
      if (!scrollView) return;
      scrollView.scrollIntoView(targetId);
    });

  setTimeout(() => {
    context.scrollWithAnimation = true;
  }, 1000);
// #endif
}


export function scrollToBottom(context: any, eleId: string, targetId: string) {
  // #ifndef H5
  // const view = this.createSelectorQuery().select(`#${eleId}`);
  const view = uni.createSelectorQuery()
    .in(context)
    .select(`#${eleId}`);
  view
    // @ts-ignore
    .node()
    .exec((res) => {
      const scrollView = res[0]?.node;
      if (!scrollView) return;

      scrollView.scrollIntoView(`#${targetId}`);
    });
  // #endif

  // #ifdef H5
  const dom = document.querySelector(`#${eleId}`);
  if (!dom) return;
  console.log('dom.scrollHeight', dom.scrollHeight, dom.clientHeight);
  dom.scrollTop = dom.scrollHeight - dom.clientHeight;
  // #endif
}


/**
 * 小程序中scrollView的移动
 * @param {string} element scrollView的选择器
 * @param {object} context 上下文
 * @param {string} target 目标dom的选择器皿
 */
export function mpScrollInto({
  element,
  context,
  target,
}: any) {
  getRect(context, target).then((rect: any) => {
    const { top } = rect || {};

    const view = context.createSelectorQuery().select(element);
    view
    // @ts-ignore
      .node()
      .exec((res: any) => {
        const scrollView = res[0]?.node;
        if (!scrollView) return;
        scrollView.scrollTo({ top });
      });
  });
}
