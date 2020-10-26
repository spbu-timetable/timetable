import filterSearch from "../../helpers/searchFilter";
import sortList from "../../helpers/sortList";
import Action from "../../types/Action";
import Cabinet from "../../types/Cabinet";
import CabinetsPage from "../../types/CabinetsPage";

import ACTION from "../actionCreators/ACTION";
import initialState from "../states/cabinets";

function cabinets(state: CabinetsPage = initialState, action: Action): CabinetsPage {
  switch (action.type) {
    case ACTION.SET_CABINETS:
      return {
        ...state,
        didGet: true,
        cabinets: [...action.payload].sort((a: Cabinet, b: Cabinet) =>
          sortList(a.DisplayName1, b.DisplayName1)
        ),
      };
    case ACTION.CLEAN_CABINETS:
      return {
        ...state,
        didGet: false,
        cabinets: [],
        selected_cabinets: [],
      };

    case ACTION.SELECT_CABINET:
      if (!state.selected_cabinets.includes(action.payload) && state.selected_cabinets.length < 4) {
        return {
          ...state,
          selected_cabinets: [...state.selected_cabinets, action.payload],
        };
      }
      break;

    case ACTION.DESELECT_CABINET:
      for (let i = 0; i < state.selected_cabinets.length; i++) {
        if (action.payload === state.selected_cabinets[i].Oid) {
          state.selected_cabinets.splice(i, 1);
        }
      }
      return {
        ...state,
      };
    case ACTION.SET_CABINET_TIMETABLE:
      return {
        ...state,
        timetable: [...state.timetable, ...action.payload],
      };

    case ACTION.FILTER_CABINETS:
      return {
        ...state,
        filter_value: action.payload,
        filtered_cabinets: filterSearch(state.cabinets, action.payload),
      };
  }

  return state;
}

export default cabinets;
