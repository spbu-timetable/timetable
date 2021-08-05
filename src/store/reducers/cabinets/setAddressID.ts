import Cabinets from "../../../types/pages/Cabinets";

const setAddressID = (addressID: string, state: Cabinets): Cabinets => {
	return {
		...state,
		addressID: addressID,
	};
};

export default setAddressID;
