import { connect } from "react-redux";
import { CombinedState } from "redux";
import Footer from ".";
import authAC from "../../store/actionCreators/authAC";

import Action from "../../types/Action";
import AccountPage from "../../types/pages/AccountPage";
import LoginPage from "../../types/pages/LoginPage";

function mapStateToProps(
  state: CombinedState<{
    login: LoginPage;
    account: AccountPage;
  }>
) {
  return {
    hideLoginBtn: state.login.hideLoginBtn,
    refreshToken: state.account.refreshToken!,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    logout: () => {
      dispatch(authAC.logout());
    },
  };
}

const FooterContainer = connect(mapStateToProps, mapDispatchToProps)(Footer);

export default FooterContainer;
