import Educator from "../../../types/Educator";
import Educators from "../../../types/pages/Educators";

const deselect = (educator: Educator, state: Educators) => {
	return {
		...state,
		selected: [...state.selected.filter((e: Educator) => e !== educator)],
	};
};

export default deselect;
