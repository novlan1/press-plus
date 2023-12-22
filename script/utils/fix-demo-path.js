const glob = require('glob');
const fs =  require('fs');
const { getActPageDir } = require('./utils');

function main() {
  const list = glob.sync('src/packages/**/*.md');
  // const list = [
  //   'src/packages/press-act-goods-tab/README.md'
  // ]
  const reg = /press-([^/]+)/;
  list.forEach((item) => {
    const match = item.match(reg);
    const name = match[1];
    const pagePrefix = getActPageDir(name);


    replaceFile(item, (data) => {
      const reg = /(?<=url\s*:\s*pages\/)([^/]+)/;
      const res = data.replace(reg, pagePrefix);
      console.log('res', res);
      return res;
    });
    console.log('pagePrefix', pagePrefix);
  });
}

function replaceFile(filePath, replaceFunction) {
  const data = fs.readFileSync(filePath, {
    encoding: 'utf-8',
  });
  const newContent = replaceFunction(data);
  fs.writeFileSync(filePath, newContent, {
    encoding: 'utf-8',
  });
}

main();
