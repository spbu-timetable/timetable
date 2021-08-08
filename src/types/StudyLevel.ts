import EducationalProgram from "./Program";

type StudyLevel = {
	StudyLevelName: string;
	StudyLevelNameEnglish: string;
	HasCourse6: boolean;
	StudyProgramCombinations: EducationalProgram[];
};

export default StudyLevel;
