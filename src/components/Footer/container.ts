import { connect } from "react-redux";
import { CombinedState } from "redux";
import Header from ".";
import authAC from "../../store/actionCreators/authAC";

import Action from "../../types/Action";
import LoginPage from "../../types/pages/LoginPage";

function mapStateToProps(
  state: CombinedState<{
    login: LoginPage;
  }>
) {
  return {
    hideLoginBtn: state.login.hideLoginBtn,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    logout: () => {
      dispatch(authAC.logout());
    },
  };
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
