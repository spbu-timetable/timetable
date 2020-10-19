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

function setLang(isRussian: boolean): Action {
  return {
    type: ACTION.SET_LANG,
    payloaf: isRussian,
  };
}

const headerAC = {
  setButtonTitle: setButtonTitle,
  setWeek: setWeek,
  setLang: setLang,
};

export default headerAC;
