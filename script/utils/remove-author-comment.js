const glob = require('glob');
const fs = require('fs');
function main() {
  const list = glob.sync('src/**/*.scss');
  // const list = ['src/packages/press-act-goods-detail-meta/css/cf-vertical.scss'];
  list.forEach((file) => {
    removeAuthorComment(file);
  });
}

const AUTHOR_COMMENT_REG = /\s*\/\*[\s\S]+?author[:：][\s\S]+?\*\/\s*/m;
function removeAuthorComment(file) {
  const content = fs.readFileSync(file, {
    encoding: 'utf-8',
  });

  if (!AUTHOR_COMMENT_REG.test(content)) return;

  const newContent = content.replace(AUTHOR_COMMENT_REG, '');
  fs.writeFileSync(file, newContent, {
    encoding: 'utf-8',
  });
}

main();
