import searchFilter from "../../../helpers/searchFilter";
import Addresses from "../../../types/pages/Addresses";

const filter = (filter: string, state: Addresses): Addresses => {
	return {
		...state,
		filter: filter,
		filtered: searchFilter(state.items, filter),
	};
};

export default filter;
