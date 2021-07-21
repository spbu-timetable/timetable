import getObjectName from "./getObjectName";

/**
 * @param items array of type Address[] | Cabinet[] | Faculty[]
 * @param filter string that filters an array
 * @returns filtered array
 */
function filterSearch(items: any, filter: string): any {
	return items.filter((item: any) => getObjectName(item).toLowerCase().search(filter.toLowerCase().trim()) !== -1);
}

export default filterSearch;
