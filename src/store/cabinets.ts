import Axios from "axios";
import searchFilter from "../helpers/searchFilter";
import Cabinet from "../types/Cabinet";
import api_address from "./apiAddress";

class Cabinets {
	addressID: string = "";

	received: Map<string, boolean> = new Map();
	filter: string = "";

	items: Map<string, Cabinet[]> = new Map();
	selected: Map<string, Cabinet[]> = new Map();

	constructor() {}

	get filtered() {
		return searchFilter(this.items.get(this.addressID) || [], this.filter);
	}

	get() {
		Axios.get(api_address + `/addresses/${this.addressID}/classrooms`)
			.then((response) => {
				this.items.set(this.addressID, response.data);
				this.received.set(this.addressID, response.data);
			})
			.catch((err) => {
				alert(err.response.data);
			});
	}

	updFilter(filter: string) {
		this.filter = filter;
	}

	getTimetable(fromDate: Date, toDate: Date) {}

	select(cabinet: Cabinet) {
		this.selected.get(this.addressID)?.push(cabinet);
	}

	deselect(cabinet: Cabinet) {
		this.selected.get(this.addressID)?.filter((c: Cabinet) => c.Oid != cabinet.Oid);
	}
}

const cabinets = new Cabinets();
export default cabinets;
