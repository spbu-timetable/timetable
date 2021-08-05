import sortList from "../../../helpers/sortList";
import Cabinet from "../../../types/Cabinet";
import Cabinets from "../../../types/pages/Cabinets";

const select = (cabinet: Cabinet, state: Cabinets): Cabinets => {
	const selected = state.selected.get(state.addressID);
	if (selected) {
		if (selected.includes(cabinet)) {
			selected.push(cabinet);
			selected.sort((a: Cabinet, b: Cabinet) => sortList(a.DisplayName1, b.DisplayName1));

			return {
				...state,
				selected: state.selected.set(state.addressID, selected),
			};
		}
	}

	return state;
};

export default select;
