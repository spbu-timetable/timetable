import CabinetsPage from "../../types/pages/CabinetsPage";

const cabinets: CabinetsPage = {
	addressID: "",

	received: new Map(),
	filterValue: "",

	cabinets: new Map(),
	filtered: [],
	selected: [],
};

export default cabinets;
