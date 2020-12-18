import getObjectName from "../../../../helpers/getObjectName";

export default function checkSelection(item: any, selected_items: any): boolean {
  if (selected_items.length === 4) {
    return true;
  }

  function didFind(element: any, _index: any, _array: any): boolean {
    return getObjectName(element) === getObjectName(item) ? true : false;
  }

  for (let i = 0; i < selected_items.length; i++) {
    if (selected_items.find(didFind, item)) {
      return true;
    }
  }
  return false;
}
