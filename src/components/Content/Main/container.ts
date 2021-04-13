import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import Component from ".";
import AddressesPage from "../../../types/pages/AddressesPage";
import addresses from "../../../store/actionCreators/addressAC";
import app from "../../../store/actionCreators/app";

function mapStateToProps(
	state: CombinedState<{
		addresses: AddressesPage;
	}>
) {
	return {
		didGetAddresses: state.addresses.didGet,
	};
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void) {
	return {
		getAddresses: () => {
			dispatch(addresses.getAddresses());
		},
		startLoader: () => {
			dispatch(app.setLoader());
		},
	};
}

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export default Container;
