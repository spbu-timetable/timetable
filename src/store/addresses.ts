import searchFilter from "../helpers/searchFilter";
import Address from "../types/Address";
import api_address from "./apiAddress";
import { action, flow, makeAutoObservable, makeObservable, observable } from "mobx";

class Addresses {
	received: boolean = false;
	items: Address[] = [];
	filter: string = "";

	constructor() {
		makeAutoObservable(this, {}, { deep: true });
	}

	get filtered() {
		return searchFilter(this.items, this.filter);
	}

	get() {
		fetch(api_address + "/addresses")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				this.items = [...data];
				this.received = true;
			})
			.catch((err) => {
				console.log(err);
			});
	}

	updFilter(filter: string) {
		this.filter = filter;
	}
}

const addresses = new Addresses();
export default new Addresses();
