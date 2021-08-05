import EducationalProgram from "../Program";

type EducationalProgramPage = {
	received: Map<string, boolean>;
	filter: string;

	level: string;
	items: Map<string, EducationalProgram[]>;
	filtered: Map<string, EducationalProgram[]>;
};

export default EducationalProgramPage;
