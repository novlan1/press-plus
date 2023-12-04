import Vue from 'vue';
import App from './App.vue';
import { reportAegis } from './utils/report/report';
import { initDemoI18n } from './utils/i18n/i18n';
import { initMixin } from './utils/mixin/mixin';
import { checkAndShowVConsole } from 't-comm/lib/v-console/toggle';

import DemoBlock from './pages/demo-block/demo-block.vue';
import ToggleHeader from './pages/components/toggle-header/toggle-header.vue';

import PressCell from 'press-ui/press-cell/press-cell.vue';
import PressPicker from 'press-ui/press-picker/press-picker.vue';
import PressPopupCell from 'src/packages/press-popup-cell/press-popup-cell.vue';

import Toast from 'press-ui/press-toast/index';
// import PressUI from 'src/lib/index';


// Vue.use(PressUI);

Vue.component('DemoBlock', DemoBlock);
Vue.component('ToggleHeader', ToggleHeader);

Vue.component('PressCell', PressCell);
Vue.component('PressPicker', PressPicker);
Vue.component('PressPopupCell', PressPopupCell);


Vue.config.productionTip = false;
App.mpType = 'app';
Vue.use(Toast);
reportAegis();
initDemoI18n();

const app = new Vue({
  ...App,
});
app.$mount();
initMixin();

// #ifdef H5
checkAndShowVConsole();
// #endif

