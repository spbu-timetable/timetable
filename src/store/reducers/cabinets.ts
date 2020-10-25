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
        cabinets: [...action.payload].sort((a: Cabinet, b: Cabinet) => {
          let name1 = a.DisplayName1.toLowerCase();
          let name2 = b.DisplayName1.toLowerCase();
          if (name1 < name2) {
            return -1;
          } else if (name1 > name2) {
            return 1;
          }
          return 0;
        }),
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
      const filtered_cabinets: Cabinet[] = [];
      for (let i = 0; i < state.cabinets.length; i++) {
        const name: string = state.cabinets[i].DisplayName1.toLowerCase();
        if (name.search(action.payload.toLowerCase()) !== -1) {
          filtered_cabinets.push(state.cabinets[i]);
        }
      }
      return {
        ...state,
        filter_value: action.payload,
        filtered_cabinets: [...filtered_cabinets],
      };
  }

  return state;
}

export default cabinets;
