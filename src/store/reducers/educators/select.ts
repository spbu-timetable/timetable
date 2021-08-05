import Educator from "../../../types/Educator";
import Educators from "../../../types/pages/Educators";

const select = (educator: Educator, state: Educators) => {
	if (!state.selected.includes(educator)) {
		return {
			...state,
			selected: [...state.selected, educator],
		};
	}

	return state;
};

export default select;
