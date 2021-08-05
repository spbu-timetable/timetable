import sortList from "../../../helpers/sortList";
import Cabinet from "../../../types/Cabinet";
import Cabinets from "../../../types/pages/Cabinets";

const set = (cabinets: Cabinet[], addressID: string, state: Cabinets): Cabinets => {
	const sorted = cabinets.sort((a: Cabinet, b: Cabinet) => sortList(a.DisplayName1, b.DisplayName1));
	return {
		...state,
		received: state.received.set(addressID, true),
		items: state.items.set(addressID, [...sorted]),
		filtered: state.filtered.set(addressID, [...sorted]),
	};
};

export default set;
