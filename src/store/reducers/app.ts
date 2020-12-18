import initialState from "../states/app";
import Action from "../../types/Action";
import AppPage from "../../types/pages/AppPage";
import ACTION from "../actionCreators/ACTION";

function app(state: AppPage = initialState, action: Action): AppPage {
  switch (action.type) {
    case ACTION.ALERT:
      return {
        ...state,
        isAlert: true,
        alert: action.payload,
      };
    case ACTION.CLEAN_ALERT:
      return {
        ...state,
        isAlert: false,
      };
  }
  return state;
}

export default app;
