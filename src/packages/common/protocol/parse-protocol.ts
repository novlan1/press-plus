interface IProtocolItem {
  text: string;
  light?: boolean;
  link?: string;
}

function parseProtocolItem(info: any) {
  let infoList: Array<IProtocolItem> = [];
  if (!Array.isArray(info)) {
    infoList = [{
      text: info,
    }];
  } else {
    infoList = info.map((item) => {
      if (typeof item === 'string') {
        return {
          text: item,
        };
      }
      return item;
    });
  }

  return infoList;
}


export function parseProtocol(list: Array<{
  title?: string;
  list: Array<string | Array<string | IProtocolItem>>
}>) {
  return list.map((item, itemIndex) => ({
    ...item,
    uniqueKey: `first-key-${itemIndex}`,
    list: (item.list || []).map((info, infoIndex) => {
      const infoList = parseProtocolItem(info);

      return {
        uniqueKey: `second-key-${infoIndex}`,
        list: infoList.map((infoItem, infoItemIndex) => ({
          ...infoItem,
          uniqueKey: `third-key-${infoItemIndex}`,
        })),
      };
    }),
  }));
}
