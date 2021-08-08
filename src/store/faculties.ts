import searchFilter from "../helpers/searchFilter";
import Faculty from "../types/Faculty";

class Faculties {
	received: boolean = false;
	filter: string = "";
	items: Faculty[] = [];

	get filtered() {
		return searchFilter(this.items, this.filter);
	}

	get() {}
}

const faculties = new Faculties();
export default faculties;
