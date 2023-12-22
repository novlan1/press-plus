// 普通Vue2项目适配器

import { initGlobalComponent, setCustomElements } from 'press-ui/common/vue3/adapter';
import ScrollView from 'press-ui/scroll-view/scroll-view.vue';
import Swiper from 'press-ui/swiper/swiper.vue';
import SwiperItem from 'press-ui/swiper-item/swiper-item.vue';


/**
 * 初始化普通Vue项目的适配器
 */
export function initPureAdapter(app?: any) {
  initGlobalComponent([
    {
      name: 'ScrollView',
      component: ScrollView,
    },
    {
      name: 'Swiper',
      component: Swiper,
    },
    {
      name: 'SwiperItem',
      component: SwiperItem,
    },
  ], app);

  setCustomElements([
    'uni-scroll-view',
    'uni-swiper',
    'uni-swiper-item',
  ], app);
}
