import Action from "../../types/Action";
import ACTION from "./ACTION";

function updFilter(filter_value: string): Action {
  return {
    type: ACTION.FILTER_EDUCATORS,
    payload: filter_value,
  };
}

const educatorAC = {
  updFilter: updFilter,
};

export default educatorAC;
