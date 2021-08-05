import searchFilter from "../../../helpers/searchFilter";
import Cabinets from "../../../types/pages/Cabinets";

const filter = (filter: string, state: Cabinets): Cabinets => {
	return {
		...state,
		filter: filter,
		filtered: searchFilter(state.items.get(state.addressID), filter),
	};
};

export default filter;
