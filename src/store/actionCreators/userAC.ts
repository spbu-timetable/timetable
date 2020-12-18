import Action from "../../types/Action";
import ACTION from "./ACTION";

function saveCabinet(id: string): Action {
  return {
    type: ACTION.SAVE_CABINET,
    payload: id,
  };
}

function setCabinet(id: string): Action {
  return {
    type: ACTION.SET_CABINET,
    payload: id,
  };
}

const userAC = {
  saveCabinet: saveCabinet,
  setCabinet: setCabinet,
};

export default userAC;
