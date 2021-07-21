import Cabinet from "../Cabinet";

type CabinetsPage = {
	addressID: string;

	received: Map<string, boolean>;
	filterValue: string;

	cabinets: Map<string, Cabinet[]>;
	filtered: Cabinet[];
	selected: Cabinet[];
};

export default CabinetsPage;
