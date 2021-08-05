import Cabinet from "../Cabinet";

type Cabinets = {
	addressID: string;

	received: Map<string, boolean>;
	filter: string;

	items: Map<string, Cabinet[]>;
	filtered: Map<string, Cabinet[]>;
	selected: Map<string, Cabinet[]>;
};

export default Cabinets;
