import FacultyLocalStorage from "../../localStorage/faculty";
import Action from "../../types/Action";
import Faculty from "../../types/Faculty";
import FacultiesPage from "../../types/FacultiesPage";

import ACTION from "../actionCreators/ACTION";
import initialState from "../states/faculties";

function faculties(state: FacultiesPage = initialState, action: Action): FacultiesPage {
  switch (action.type) {
    case ACTION.SET_FACULTIES:
      return {
        ...state,
        didGet: true,
        faculties: [...action.payload].sort((a: Faculty, b: Faculty) => {
          let name1 = a.Name.toLowerCase();
          let name2 = b.Name.toLowerCase();
          if (name1 < name2) {
            return -1;
          } else if (name1 > name2) {
            return 1;
          }
          return 0;
        }),
      };
    case ACTION.SET_FACULTY:
      FacultyLocalStorage.save(action.payload);
      return {
        ...state,
        selected_faculty: action.payload,
      };

    case ACTION.FILTER_FACULTIES:
      const filtered_faculties: Faculty[] = [];
      for (let i = 0; i < state.faculties.length; i++) {
        const name: string = state.faculties[i].Name.toLowerCase();
        if (name.search(action.payload.toLowerCase().trim()) !== -1) {
          filtered_faculties.push(state.faculties[i]);
        }
      }
      return {
        ...state,
        filter_value: action.payload,
        filtered_faculties: [...filtered_faculties],
      };
  }

  return state;
}

export default faculties;
