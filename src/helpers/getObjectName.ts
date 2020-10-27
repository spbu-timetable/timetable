/**
 * @param object object of type Address | Cabinet | Faculty
 * @returns DisplayName1 or Name of the object
 * */

function getObjectName(object: any): string {
  return object.DisplayName1 === undefined ? object.Name : object.DisplayName1;
}

export default getObjectName;
