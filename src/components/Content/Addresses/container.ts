import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import Component from ".";
import AddressesPage from "../../../types/pages/Addresses";
import addresses from "../../../store/ac/addresses";
import app from "../../../store/ac/app";
import App from "../../../types/pages/App";


function mapStateToProps(
	state: CombinedState<{
		addresses: AddressesPage;
		app: App;
	}>
) {
	return {
		received: state.addresses.received,
		filterValue: state.addresses.filter,

		addresses: state.addresses.items,
		filtered: state.addresses.filtered,
	};
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void) {
	return {
		get: () => {
			dispatch(addresses.get());
		},

		updFilter: (filterStr: string) => {
			dispatch(addresses.updFilter(filterStr));
		},

		startLoading: () => {
			dispatch(app.startLoading());
		},

		stopLoading: () => {
			dispatch(app.stopLoading());
		},
	};
}

const AddressContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export default AddressContainer;
