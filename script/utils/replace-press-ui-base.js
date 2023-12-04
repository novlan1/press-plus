
const glob = require('glob');
const fs = require('fs');
function main() {
  const list = glob.sync('src/**/*.js');
  list.forEach((file) => {
    replacePressUI(file);
  });
}
const obj = {
  button: './src/packages/press-button/press-button.vue',
  cell: './src/packages/press-cell/press-cell.vue',
  'cell-group': './src/packages/press-cell/press-cell.vue',
  col: './src/packages/press-col/press-col.vue',
  row: './src/packages/press-col/press-col.vue',
  icon: './src/packages/press-icon/press-icon.vue',
  'icon-plus': './src/packages/press-icon-plus/press-icon-plus.vue',
  image: './src/packages/press-image/press-image.vue',
  popup: './src/packages/press-popup/press-popup.vue',
  'popup-plus': './src/packages/press-popup-plus/press-popup-plus.vue',
  toast: './src/packages/press-toast/press-toast.vue',
  transition: './src/packages/press-transition/press-transition.vue',
  calendar: './src/packages/press-calendar/press-calendar.vue',
  checkbox: './src/packages/press-checkbox/press-checkbox.vue',
  'checkbox-group': '',
  'code-input': './src/packages/press-code-input/press-code-input.vue',
  'datetime-picker': './src/packages/press-datetime-picker/press-datetime-picker.vue',
  field: './src/packages/press-field/press-field.vue',
  picker: './src/packages/press-picker/press-picker.vue',
  'picker-plus': './src/packages/press-picker-plus/press-picker-plus.vue',
  radio: './src/packages/press-radio/press-radio.vue',
  'radio-group': '',
  rate: './src/packages/press-rate/press-rate.vue',
  search: './src/packages/press-search/press-search.vue',
  slider: './src/packages/press-slider/press-slider.vue',
  stepper: './src/packages/press-stepper/press-stepper.vue',
  switch: './src/packages/press-switch/press-switch.vue',
  uploader: './src/packages/press-uploader/press-uploader.vue',
  'action-sheet': './src/packages/press-action-sheet/press-action-sheet.vue',
  dialog: './src/packages/press-dialog/press-dialog.vue',
  'dialog-plus': './src/packages/press-dialog-plus/press-dialog-plus.vue',
  'dropdown-menu': './src/packages/press-dropdown-menu/press-dropdown-menu.vue',
  'dropdown-item': '',
  loading: './src/packages/press-loading/press-loading.vue',
  'loading-plus': './src/packages/press-loading-plus/press-loading-plus.vue',
  notify: './src/packages/press-notify/press-notify.vue',
  overlay: './src/packages/press-overlay/press-overlay.vue',
  popover: './src/packages/press-popover/press-popover.vue',
  'popover-plus': './src/packages/press-popover-plus/press-popover-plus.vue',
  'share-sheet': './src/packages/press-share-sheet/press-share-sheet.vue',
  'swipe-cell': './src/packages/press-swipe-cell/press-swipe-cell.vue',
  avatar: './src/packages/press-avatar/press-avatar.vue',
  badge: './src/packages/press-badge/press-badge.vue',
  barcode: './src/packages/press-barcode/press-barcode.vue',
  card: './src/packages/press-card/press-card.vue',
  circle: './src/packages/press-circle/press-circle.vue',
  collapse: './src/packages/press-collapse/press-collapse.vue',
  'collapse-item': '',
  'count-down': './src/packages/press-count-down/press-count-down.vue',
  'count-to': './src/packages/press-count-to/press-count-to.vue',
  divider: './src/packages/press-divider/press-divider.vue',
  empty: './src/packages/press-empty/press-empty.vue',
  fab: './src/packages/press-fab/press-fab.vue',
  'image-preview': './src/packages/press-image-preview/press-image-preview.vue',
  list: './src/packages/press-list/press-list.vue',
  'notice-bar': './src/packages/press-notice-bar/press-notice-bar.vue',
  pagination: './src/packages/press-pagination/press-pagination.vue',
  progress: './src/packages/press-progress/press-progress.vue',
  'q-r-code': './src/packages/press-q-r-code/press-q-r-code.vue',
  skeleton: './src/packages/press-skeleton/press-skeleton.vue',
  steps: './src/packages/press-steps/press-steps.vue',
  sticky: './src/packages/press-sticky/press-sticky.vue',
  tag: './src/packages/press-tag/press-tag.vue',
  grid: './src/packages/press-grid/press-grid.vue',
  'grid-item': './src/packages/press-grid/press-grid.vue',
  'index-bar': './src/packages/press-index-bar/press-index-bar.vue',
  'index-anchor': './src/packages/press-index-bar/press-index-bar.vue',
  'nav-bar': './src/packages/press-nav-bar/press-nav-bar.vue',
  sidebar: './src/packages/press-sidebar/press-sidebar.vue',
  'sidebar-item': '',
  tab: './src/packages/press-tab/press-tab.vue',
  tabs: './src/packages/press-tab/press-tabs.vue',
  tabbar: './src/packages/press-tabbar/press-tabbar.vue',
  'tree-select': './src/packages/press-tree-select/press-tree-select.vue',

};
const REPLACE_LIST = Object.keys(obj).reduce((acc, item) => {
  const from = `src/packages/press-${item}`;
  const fromRelative = `../press-${item}`;
  const fromRelative2 = `../../packages/press-${item}`;
  const target = `press-ui/press-${item}`;

  acc.push({
    from,
    target,
  });

  acc.push({
    from: fromRelative,
    target,
  });
  acc.push({
    from: fromRelative2,
    target,
  });
  return acc;
}, []);


function replacePressUI(file) {
  // console.log('REPLACE_LIST', REPLACE_LIST);
  for (const item of REPLACE_LIST) {
    const { from, target } = item;
    // console.log('file', file);
    // file.replace(from, target);
    const parseFunc = data => data.replace(from, target);
    replaceContent(file, parseFunc);
  }
}

function replaceContent(file, parseFunc) {
  const data = fs.readFileSync(file, {
    encoding: 'utf-8',
  });
  const newContent = parseFunc(data);
  if (data !== newContent) {
    fs.writeFileSync(file, newContent, {
      encoding: 'utf-8',
    });
  }
}
main();
