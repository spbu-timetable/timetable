import getObjectName from "./getObjectName";

/**
 * @param items array of type Address[] | Cabinet[] | Faculty[]
 * @param filterStr string that filters an array
 * @returns filtered array
 */
function filterSearch(items: any, filterStr: string): any {
  const filteredItems = [];

  for (let i = 0; i < items.length; i++) {
    const name: string = getObjectName(items[i]);

    if (name.toLowerCase().search(filterStr.toLowerCase().trim()) !== -1) {
      filteredItems.push(items[i]);
    }
  }
  return filteredItems;
}

export default filterSearch;
