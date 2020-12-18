import Action from "../../types/Action";
import { SavedItem } from "../../types/User";
import ACTION from "./ACTION";

function saveCabinet(item: SavedItem): Action {
  return {
    type: ACTION.SAVE_CABINET,
    payload: item,
  };
}

function setCabinet(id: string): Action {
  return {
    type: ACTION.SET_CABINET,
    payload: id,
  };
}

function selectCabinet(cabinet: SavedItem): Action {
  return {
    type: ACTION.SELECT_SAVED_CABINET,
    payload: cabinet,
  };
}

function deselectCabinet(cabinet: SavedItem): Action {
  return {
    type: ACTION.DESELECT_SAVED_CABINET,
    payload: cabinet,
  };
}

const userAC = {
  saveCabinet: saveCabinet,
  setCabinet: setCabinet,

  selectCabinet: selectCabinet,
  deselectCabinet: deselectCabinet,
};

export default userAC;
