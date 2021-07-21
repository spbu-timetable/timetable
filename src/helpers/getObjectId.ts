/**
 * @param object object of type Address | Cabinet | Faculty
 * @returns id of the object
 * */

function getObjectID(object: any): string {
  if (object.Oid !== undefined) {
    return object.Oid;
  } else if (object.Id !== undefined) {
    return object.Id;
  } else if (object.StudentGroupId !== undefined) {
    return object.StudentGroupId;
  } else {
    return object.oid;
  }
}

export default getObjectID;
