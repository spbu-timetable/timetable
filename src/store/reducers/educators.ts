import Action from "../../types/Action";
import EducatorsPage from "../../types/pages/EducatorsPage";
import ACTION from "../actionCreators/ACTION";
import initialState from "../states/educators";

function educators(state: EducatorsPage = initialState, action: Action): EducatorsPage {
  switch (action.type) {
    case ACTION.SET_EDUCATORS:
      return {
        ...state,
        didGet: true,
        filtered_educators: action.payload,
      };
    case ACTION.SET_EDUCATOR:
      return {
        ...state,
        selected_educator: action.payload,
      };

    case ACTION.UPD_FILTER_VALUE: {
      return {
        ...state,
        filter_value: action.payload,
      };
    }
  }

  return state;
}

export default educators;
