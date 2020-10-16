import Action from "../../types/Action";
import ACTION from "./ACTION";

function setButtonTitle(title: string): Action {
  return {
    type: ACTION.SET_HEADER_BUTTON_TITLE,
    payload: title,
  };
}

function setWeek(index: number): Action {
  return {
    type: ACTION.SET_WEEK,
    payload: index,
  };
}

const headerAC = {
  setButtonTitle: setButtonTitle,
  setWeek: setWeek,
};

export default headerAC;
