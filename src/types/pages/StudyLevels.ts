import StudyLevel from "../StudyLevel";

type StudyLevels = {
	filter: string;

	received: Map<string, boolean>;
	items: Map<string, StudyLevel[]>;
	filtered: Map<string, StudyLevel[]>;

	faculty: string;
};

export default StudyLevels;
