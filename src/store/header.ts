import { computed, makeObservable } from "mobx";
import formatHeaderDateToStr from "../helpers/formatHeaderDateToStr";

class Header {
	loading: boolean = false;

	fromDate: Date = new Date(this.getMonday(new Date(Date.now())));

	private getMonday(date: Date): Date {
		date = new Date(date);
		var day = date.getDay(),
			diff = date.getDate() - day + (day === 0 ? -6 : 1); // adjust when day is sunday
		return new Date(date.setDate(diff));
	}

	toDate: Date = this.getSunday();

	private getSunday(): Date {
		const sunday = new Date(this.fromDate.getTime());
		sunday.setDate(sunday.getDate() + 6);
		return sunday;
	}

	constructor() {
		makeObservable(this, {
			fromDateStr: computed,
			toDateStr: computed,
		});
	}

	get fromDateStr(): string {
		return formatHeaderDateToStr(this.fromDate);
	}

	get toDateStr(): string {
		return formatHeaderDateToStr(this.toDate);
	}

	setWeek(date: Date) {
		this.fromDate = this.getMonday(date);
		this.toDate = this.getSunday();
	}

	startLoading() {}

	stopLoading() {}
}

const header = new Header();
export default header;
