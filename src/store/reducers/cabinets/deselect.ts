import Cabinet from "../../../types/Cabinet";
import Cabinets from "../../../types/pages/Cabinets";

const deselect = (cabinet: Cabinet, state: Cabinets): Cabinets => {
	let selected = state.selected.get(state.addressID);
	if (selected) {
		selected = selected.filter((c) => c.Oid !== cabinet.Oid);
		return {
			...state,
			selected: state.selected.set(state.addressID, selected),
		};
	}
	return { ...state };
};

export default deselect;
