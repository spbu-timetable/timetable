import { connect } from "react-redux";
import { CombinedState } from "redux";
import Header from ".";
import authAC from "../../store/actionCreators/authAC";
import headerAC from "../../store/actionCreators/headerAC";

import Action from "../../types/Action";
import HeaderT from "../../types/Header";
import AccountPage from "../../types/pages/AccountPage";

function mapStateToProps(
  state: CombinedState<{
    header: HeaderT;
    account: AccountPage;
  }>
) {
  return {
    week: state.header.week.toDateString(),

    fromDateStr: state.header.fromDateStr,
    toDateStr: state.header.toDateStr,

    refreshToken: state.account.refreshToken!,
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

    logout: () => {
      dispatch(authAC.logout());
    },
  };
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
