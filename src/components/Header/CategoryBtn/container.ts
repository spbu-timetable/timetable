import { connect } from "react-redux";
import { CombinedState } from "redux";
import CategoryBtn from ".";

import headerAC from "../../../store/actionCreators/headerAC";
import Action from "../../../types/Action";
import Header from "../../../types/Header";

function mapStateToProps(
  state: CombinedState<{
    header: Header;
  }>
) {
  return {
    button_title: state.header.button_title,
    menu_titles: state.header.menu_titles,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    setButtonTitle: (title: string) => {
      dispatch(headerAC.setButtonTitle(title));
    },
  };
}

const CategoryBtnContainer = connect(mapStateToProps, mapDispatchToProps)(CategoryBtn);

export default CategoryBtnContainer;
