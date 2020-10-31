import Action from "../../types/Action";

import ACTION from "../actionCreators/ACTION";
import initialState from "../states/EducationYears";
import sortList from "../../helpers/sortList";
import filterSearch from "../../helpers/searchFilter";
import EducationYearsPage from "../../types/pages/EducationYearsPage";
import EducationYear from "../../types/EducationYear";
import EducationYearLocalStorage from "../../localStorage/year";

function educationYears(state: EducationYearsPage = initialState, action: Action): EducationYearsPage {
  switch (action.type) {

    case ACTION.GET_EDUCATIONYEARS:
        return{
            ...state,
            didGet: true,
            ed_years: action.payload.AdmissionYears.sort((a: EducationYear, b: EducationYear) => sortList(a.YearName, b.YearName)),
        };
    case ACTION.SET_EDUCATIONYEARS:
      return {
        ...state,
        didGet: true,
        ed_years: [...action.payload].sort((a: EducationYear, b: EducationYear) => sortList(a.YearName, b.YearName)),
      };
    case ACTION.SET_EDUCATIONYEAR:
      EducationYearLocalStorage.save(action.payload);
      return {
        ...state,
        selected_ed_year: action.payload,
      };

    case ACTION.FILTER_EDUCATIONYEARS:
      return {
        ...state,
        filter_value: action.payload,
        filtered_ed_years: filterSearch(state.ed_years, action.payload),
      };
  }

  return state;
}

export default educationYears;