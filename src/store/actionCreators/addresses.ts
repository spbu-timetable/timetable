import { AnyAction } from "redux";
import Address from "../../types/Address";
import ACTION from "./ACTION";

function getAddresses(): AnyAction {
	return { type: ACTION.GET_ADDRESSES };
}

function setAddresses(addresses: Address[]): AnyAction {
	return {
		type: ACTION.SET_ADDRESSES,
		payload: addresses,
	};
}

function setAddress(address: Address): AnyAction {
	return {
		type: ACTION.SET_ADDRESS,
		payload: address,
	};
}

function updFilter(filterStr: string): AnyAction {
	return {
		type: ACTION.FILTER_ADDRESSES,
		payload: filterStr,
	};
}

const addresses = {
	get: getAddresses,
	setAddresses: setAddresses,
	set: setAddress,
	updFilter: updFilter,
};

export default addresses;
