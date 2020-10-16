import { connect } from "react-redux";
import { CombinedState } from "redux";
import Header from ".";
import headerAC from "../../store/actionCreators/headerAC";

import Action from "../../types/Action";
import HeaderT from "../../types/Header";

function mapStateToProps(
  state: CombinedState<{
    header: HeaderT;
  }>
) {
  return {
    week: state.header.week.toDateString(),
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    setWeek: (index: number) => {
      dispatch(headerAC.setWeek(index));
    },
  };
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
