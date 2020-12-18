import { CombinedState } from "redux";
import Cabinets from ".";

import Action from "../../../../types/Action";
import AddressesPage from "../../../../types/pages/AddressesPage";

import { connect } from "react-redux";
import cabinetAC from "../../../../store/actionCreators/cabinetAC";
import Cabinet from "../../../../types/Cabinet";
import CabinetsPage from "../../../../types/pages/CabinetsPage";
import Header from "../../../../types/Header";
import authAC from "../../../../store/actionCreators/authAC";
import userAC from "../../../../store/actionCreators/userAC";
import { SavedItem } from "../../../../types/User";

function mapStateToProps(
  state: CombinedState<{
    header: Header;
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

    fromDate: state.header.fromDate,
    toDate: state.header.toDate,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    getCabinets: (oid: string | undefined) => {
      dispatch(cabinetAC.getCabinets(oid!));
    },
    selectCabinet: (cabinet: Cabinet) => {
      dispatch(cabinetAC.selectCabinet(cabinet));
    },
    deselectCabinet: (cabinet: Cabinet) => {
      dispatch(cabinetAC.deselectCabinet(cabinet));
    },
    updFilter: (filterStr: string) => {
      dispatch(cabinetAC.updFilter(filterStr));
    },
    cleanCabinets: () => {
      dispatch(cabinetAC.cleanCabinets());
    },
    getCabinetsTimetable: (selected_cabinets: Cabinet[], fromDate?: Date, toDate?: Date) => {
      dispatch(cabinetAC.getCabinetTimetable(selected_cabinets, fromDate, toDate));
    },
    saveCabinet: (item: SavedItem) => {
      dispatch(userAC.saveCabinet(item));
    },
  };
}

const CabinetsContainer = connect(mapStateToProps, mapDispatchToProps)(Cabinets);

export default CabinetsContainer;
