import Action from "../../types/Action";
import Cabinet from "../../types/Cabinet";
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

function deselectCabinet(id: string): Action {
  return {
    type: ACTION.DESELECT_CABINET,
    payload: id,
  };
}

const cabinetAC = {
  getCabinets: getCabinets,
  setCabinets: setCabinets,
  selectCabinet: selectCabinet,
  deselectCabinet: deselectCabinet,
};

export default cabinetAC;
