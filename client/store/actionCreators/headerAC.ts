import Action from "../../types/Action";
import ACTION from "./ACTION";

function setButtonTitle(title: string): Action {
  return {
    type: ACTION.SET_HEADER_BUTTON_TITLE,
    payload: title,
  };
}

function setWeek(date: Date): Action {
  return {
    type: ACTION.SET_WEEK,
    payload: date,
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
