import Group from "../Group";

type Groups = {
	filter: string;

	programID: string;

	received: Map<string, boolean>;
	items: Map<string, Group[]>;
	filtered: Map<string, Group[]>;
	selected: Map<string, Group[]>;
};

export default Groups;
