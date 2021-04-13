import { connect } from "react-redux";
import { AnyAction, CombinedState } from "redux";
import Component from ".";
import Address from "../../../types/Address";
import AddressesPage from "../../../types/pages/AddressesPage";
import addresses from "../../../store/actionCreators/addressAC";

function mapStateToProps(
	state: CombinedState<{
		addresses: AddressesPage;
	}>
) {
	return {
		didGet: state.addresses.didGet,
		filter_value: state.addresses.filter_value,

		addresses: state.addresses.addresses,
		filtered_addresses: state.addresses.filtered_addresses,
	};
}

function mapDispatchToProps(dispatch: (action: AnyAction) => void) {
	return {
		getAddresses: () => {
			dispatch(addresses.getAddresses());
		},
		setAddress: (address: Address) => {
			dispatch(addresses.setAddress(address));
		},
		updFilter: (filterStr: string) => {
			dispatch(addresses.updFilter(filterStr));
		},
		// cleanState: () => {
		//   dispatch(addressAC.setAddress)
		// }
	};
}

const AddressContainer = connect(mapStateToProps, mapDispatchToProps)(Component);

export default AddressContainer;
