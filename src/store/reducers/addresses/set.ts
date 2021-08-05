import sortList from "../../../helpers/sortList";
import Address from "../../../types/Address";
import Addresses from "../../../types/pages/Addresses";

const set = (addresses: Address[], state: Addresses): Addresses => {
	return {
		...state,
		received: true,
		items: [...addresses].sort((a: Address, b: Address) => sortList(a.DisplayName1, b.DisplayName1)),
		filtered: [...addresses].sort((a: Address, b: Address) => sortList(a.DisplayName1, b.DisplayName1)),
	};
};

export default set;
