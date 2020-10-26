import FacultyLocalStorage from "../../localStorage/faculty";
import Action from "../../types/Action";
import Faculty from "../../types/Faculty";
import FacultiesPage from "../../types/FacultiesPage";

import ACTION from "../actionCreators/ACTION";
import initialState from "../states/faculties";
import sortList from "../../helpers/sortList";

function faculties(state: FacultiesPage = initialState, action: Action): FacultiesPage {
  switch (action.type) {
    case ACTION.SET_FACULTIES:
      return {
        ...state,
        didGet: true,
        faculties: [...action.payload].sort((a: Faculty, b: Faculty) => sortList(a.Name, b.Name)),
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
