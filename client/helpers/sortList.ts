/**
 * @param a first value to compare
 * @param b second value to compare
 */
function sortList(a: string, b: string): number {
  let name1 = a.toLowerCase();
  let name2 = b.toLowerCase();
  if (name1 < name2) {
    return -1;
  } else if (name1 > name2) {
    return 1;
  }
  return 0;
}

export default sortList;
