import Educator from "../types/Educator";

class Educators {
	received: boolean = false;
	filter: string = "";

	filtered: Educator[] = [];
	selected: Educator[] = [];

	select(educator: Educator) {
		this.selected.push(educator);
	}

	deselect(educator: Educator) {
		this.selected = this.selected.filter((e: Educator) => e.Id != educator.Id);
	}

	get() {}

	getTimetable(fromDate: Date, toDate: Date) {}
}

const educators = new Educators();
export default educators;
