const { replaceAllPolyfill } = require('t-comm');
const fs = require('fs');
const ACT_PATH = './src/packages/press-act-goods-tab/css';
const TOP_CLASS_LIST = [
  '.press__goods-tab',
];

replaceAllPolyfill();
const BLACK_LIST = [
  'base.scss',
  'index-horizontal.scss',
  'index-vertical.scss',
];

function main() {
  const dir = fs.readdirSync(ACT_PATH, {
    encoding: 'utf-8',
  });
  console.log('[dir]', dir);

  dir.forEach((item) => {
    if (!BLACK_LIST.includes(item)) {
      replaceScss(`${ACT_PATH}/${item}`);
    }
  });
}

function replaceScss(filePath) {
  const content = fs.readFileSync(filePath, {
    encoding: 'utf-8',
  });
  // if (!content.includes('.tip')) return;

  let newContent = content
    .replace('.press', '.press-act:not(.press-act--hidden-tip) {\n.press')
    .replace(/$/, '\n}');
    // .replaceAll(TOP_CLASS, `&${TOP_CLASS}`);

  // TOP_CLASS_LIST.forEach((item) => {
  newContent = newContent.replaceAll(new RegExp(`(${TOP_CLASS_LIST.join('|')})`, 'g'), '&$1');
  // });

  fs.writeFileSync(filePath, newContent, {
    encoding: 'utf-8',
  });
}


main();
