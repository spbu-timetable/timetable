import Action from "../../types/Action";
import Cabinet from "../../types/Cabinet";
import { SavedItem } from "../../types/User";
import ACTION from "./ACTION";

function getCabinets(oid: string): Action {
  return {
    type: ACTION.GET_CABINETS,
    payload: oid,
  };
}

function setCabinets(cabinets: Cabinet[]): Action {
  return {
    type: ACTION.SET_CABINETS,
    payload: cabinets,
  };
}

function selectCabinet(cabinet: Cabinet): Action {
  return {
    type: ACTION.SELECT_CABINET,
    payload: cabinet,
  };
}

function deselectCabinet(cabinet: Cabinet): Action {
  return {
    type: ACTION.DESELECT_CABINET,
    payload: cabinet,
  };
}

function getCabinetTimetable(selected_cabinets: Cabinet[] | SavedItem[], fromDate?: Date, toDate?: Date): Action {
  return {
    type: ACTION.GET_CABINETS_TIMETABLE,
    payload: {
      selected_cabinets: selected_cabinets,
      fromDate: fromDate,
      toDate: toDate,
    },
  };
}

function updFilter(filterStr: string | undefined): Action {
  return {
    type: ACTION.FILTER_CABINETS,
    payload: filterStr!,
  };
}

function cleanCabinets(): Action {
  return {
    type: ACTION.CLEAN_CABINETS,
  };
}

const cabinetAC = {
  getCabinets: getCabinets,
  setCabinets: setCabinets,
  cleanCabinets: cleanCabinets,

  selectCabinet: selectCabinet,
  deselectCabinet: deselectCabinet,

  getCabinetTimetable: getCabinetTimetable,

  updFilter: updFilter,
};

export default cabinetAC;
