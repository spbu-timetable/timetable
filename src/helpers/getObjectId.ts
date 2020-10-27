/**
 * @param object object of type Address | Cabinet | Faculty
 * @returns DisplayName1 or Name of the object
 * */

function getObjectId(object: any): string {
  if (object.Oid !== undefined) {
    return object.Oid;
  } else if (object.Id !== undefined) {
    return object.Id;
  } else {
    return object.oid;
  }
}

export default getObjectId;
