/**
 * @param object object of type Address | Cabinet | Faculty
 * @returns DisplayName1 or Name of the object
 * */

function getObjectId(object: any): string {
  if (object.id) {
    return object.id;
  } else if (object.Oid) {
    return object.Oid;
  } else if (object.Id) {
    return object.Id;
  } else if (object.StudentGroupId) {
    return object.StudentGroupId;
  } else {
    return object.oid;
  }
}

export default getObjectId;
