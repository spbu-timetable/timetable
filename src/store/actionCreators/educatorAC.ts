import Action from "../../types/Action";
import Educator from "../../types/Educator";
import ACTION from "./ACTION";

function selectEducator(educator: Educator): Action {
  return {
    type: ACTION.SELECT_EDUCATOR,
    payload: educator,
  };
}

function deselectEducator(educator: Educator): Action {
  return {
    type: ACTION.DESELECT_EDUCATOR,
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

function getEducatorTimetable(selected_educators: Educator[], fromDate: Date, toDate: Date): Action {
  return {
    type: ACTION.GET_EDUCATORS_TIMETABLE,
    payload: {
      selected_educators: selected_educators,
      fromDate: fromDate,
      toDate: toDate,
    },
  };
}

const educatorAC = {
  updFilter: updFilter,
  updFilterValue: updFilterValue,

  selectEducator: selectEducator,
  deselectEducator: deselectEducator,

  setEducators: setEducators,

  getEducatorTimetable: getEducatorTimetable,
};

export default educatorAC;
