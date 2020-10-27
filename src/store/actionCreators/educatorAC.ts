import Action from "../../types/Action";
import Educator from "../../types/Educator";
import ACTION from "./ACTION";

function setEducator(educator: Educator): Action {
  return {
    type: ACTION.SET_EDUCATOR,
    payload: educator,
  };
}

function setEducators(educators: Educator[]): Action {
  return {
    type: ACTION.SET_EDUCATORS,
    payload: educators,
  };
}

function updFilter(filter_value: string): Action {
  return {
    type: ACTION.FILTER_EDUCATORS,
    payload: filter_value,
  };
}

function updFilterValue(filter_value: string): Action {
  return {
    type: ACTION.UPD_FILTER_VALUE,
    payload: filter_value,
  };
}

const educatorAC = {
  updFilter: updFilter,
  updFilterValue: updFilterValue,

  setEducator: setEducator,
  setEducators: setEducators,
};

export default educatorAC;
