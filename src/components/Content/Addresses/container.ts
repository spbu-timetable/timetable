import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import Component from ".";
import Address from "../../../types/Address";
import AddressesPage from "../../../types/pages/AddressesPage";
import addresses from "../../../store/actionCreators/addresses";
import app from "../../../store/actionCreators/app";
import App from "../../../types/pages/App";
import cabinets from "../../../store/actionCreators/cabinets";

function mapStateToProps(
	state: CombinedState<{
		addresses: AddressesPage;
		app: App;
	}>
) {
	return {
		received: state.addresses.received,
		filterValue: state.addresses.filterValue,

		addresses: state.addresses.addresses,
		filtered: state.addresses.filtered,
	};
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void) {
	return {
		get: () => {
			dispatch(addresses.get());
		},

		set: (address: Address) => {
			dispatch(addresses.set(address));
		},

		setAddressID: (id: string) => {
			dispatch(cabinets.setAddressID(id));
		},

		updFilter: (filterStr: string) => {
			dispatch(addresses.updFilter(filterStr));
		},

		startLoading: () => {
			dispatch(app.setLoader());
		},

		stopLoading: () => {
			dispatch(app.stopLoader());
		},
	};
}

const AddressContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export default AddressContainer;
