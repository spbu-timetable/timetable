import { CombinedState } from "redux";
import Cabinets from ".";

import Action from "../../../types/Action";
import AddressesPage from "../../../types/AddressesPage";

import { connect } from "react-redux";
import cabinetAC from "../../../store/actionCreators/cabinetAC";
import Cabinet from "../../../types/Cabinet";
import CabinetsPage from "../../../types/CabinetsPage";

function mapStateToProps(
  state: CombinedState<{
    addresses: AddressesPage;
    cabinets: CabinetsPage;
  }>
) {
  return {
    oid: state.addresses.selected_address!.Oid,
    filter_value: state.cabinets.filter_value,

    didGet: state.cabinets.didGet,
    cabinets: state.cabinets.cabinets,
    filtered_cabinets: state.cabinets.filtered_cabinets,
    selected_cabinets: state.cabinets.selected_cabinets,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    getCabinets: (oid: string) => {
      dispatch(cabinetAC.getCabinets(oid));
    },
    selectCabinet: (cabinet: Cabinet) => {
      dispatch(cabinetAC.selectCabinet(cabinet));
    },
    deselectCabinet: (oid: string) => {
      dispatch(cabinetAC.deselectCabinet(oid));
    },
    updFilter: (filterStr: string) => {
      dispatch(cabinetAC.updFilter(filterStr));
    },
    cleanCabinets: () => {
      dispatch(cabinetAC.cleanCabinets());
    },
  };
}

const CabinetsContainer = connect(mapStateToProps, mapDispatchToProps)(Cabinets);

export default CabinetsContainer;
