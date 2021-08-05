import EducationYear from "../EducationYear";

type EducationYears = {
	filter: string;

	program: string;

	received: Map<string, boolean>;
	items: Map<string, EducationYear[]>;
	filtered: Map<string, EducationYear[]>;
};

export default EducationYears;
