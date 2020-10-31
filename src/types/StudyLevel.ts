import EducationalProgram from "./EducationalProgram";

type StudyLevel = {
    StudyLevelName: string;
    StudyLevelNameEnglish: string;
    HasCourse6: boolean;
    StudyProgramCombinations: EducationalProgram[];
};



export default StudyLevel;
