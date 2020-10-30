/**
 * @param object object of type Address | Cabinet | Faculty
 * @returns DisplayName1 or Name of the object
 * */

function getObjectName(object: any): string {
  if (object.DisplayName !== undefined) {
    return object.DisplayName;
  } else if (object.DisplayName1 !== undefined) {
    return object.DisplayName1;
  } else if (object.StudyLevelName !== undefined){
    return object.StudyLevelName;
  }
  else if (object.YearName !== undefined){
    return object.YearName;
  }
    else{
      return object.Name;
    }
}

export default getObjectName;
