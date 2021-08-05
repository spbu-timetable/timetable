import Educators from "../../../types/pages/Educators";

const filter = (filter: string, state: Educators) => {
	return {
		...state,
		filter: filter,
	};
};

export default filter;
