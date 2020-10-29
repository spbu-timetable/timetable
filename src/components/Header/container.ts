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

    isRussian: state.header.isRussian,

    fromDateStr: state.header.fromDateStr,
    toDateStr: state.header.toDateStr,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    setWeek: (date: Date) => {
      dispatch(headerAC.setWeek(date));
    },
    setLang: (isRussian: boolean) => {
      dispatch(headerAC.setLang(isRussian));
    },
  };
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
