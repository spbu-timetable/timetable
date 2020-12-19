import Action from "../../types/Action";
import AccountPage from "../../types/pages/AccountPage";
import { SavedItem } from "../../types/User";
import ACTION from "./ACTION";

function saveCabinet(item: SavedItem): Action {
  return {
    type: ACTION.SAVE_CABINET,
    payload: item,
  };
}

function removeCabinet(item: SavedItem): Action {
  return {
    type: ACTION.REMOVE_CABINET,
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

function saveEducator(educator: SavedItem): Action {
  return {
    type: ACTION.SAVE_EDUCATOR,
    payload: educator,
  };
}

function removeEducator(educator: SavedItem): Action {
  return {
    type: ACTION.REMOVE_EDUCATOR,
    payload: educator,
  };
}

function selectEducator(educator: SavedItem): Action {
  return {
    type: ACTION.SELECT_SAVED_EDUCATOR,
    payload: educator,
  };
}

function deselectEducator(educator: SavedItem): Action {
  return {
    type: ACTION.DESELECT_SAVED_EDUCATOR,
    payload: educator,
  };
}

function saveGroup(educator: SavedItem): Action {
  return {
    type: ACTION.SAVE_GROUP,
    payload: educator,
  };
}

function removeGroup(educator: SavedItem): Action {
  return {
    type: ACTION.REMOVE_GROUP,
    payload: educator,
  };
}

function selectGroup(educator: SavedItem): Action {
  return {
    type: ACTION.SELECT_SAVED_GROUP,
    payload: educator,
  };
}

function deselectGroup(educator: SavedItem): Action {
  return {
    type: ACTION.DESELECT_SAVED_GROUP,
    payload: educator,
  };
}

const userAC = {
  selectCabinet: selectCabinet,
  deselectCabinet: deselectCabinet,
  saveCabinet: saveCabinet,
  removeCabinet: removeCabinet,

  selectEducator: selectEducator,
  deselectEducator: deselectEducator,
  saveEducator: saveEducator,
  removeEducator: removeEducator,

  selectGroup: selectGroup,
  deselectGroup: deselectGroup,
  saveGroup: saveGroup,
  removeGroup: removeGroup,
};

export default userAC;
