import { CombinedState } from "redux";

import Login from ".";
import { connect } from "react-redux";
import Action from "../../types/Action";
import authAC from "../../store/actionCreators/authAC";
import LoginPage from "../../types/pages/LoginPage";
import AccountPage from "../../types/pages/AccountPage";

function mapStateToProps(
  state: CombinedState<{
    login: LoginPage;
    account: AccountPage;
  }>
) {
  return {
    email: state.login.email,
    password: state.login.password,

    accessToken: state.account.accessToken,
    refreshToken: state.account.refreshToken,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    login: (email: string, password: string) => {
      dispatch(authAC.login(email, password));
    },

    loginViaGoogle: () => {
      dispatch(authAC.loginViaGoogle());
    },

    gapiInit: () => {
      dispatch(authAC.gapiInit());
    },

    updForm: (key: string, value: string) => {
      dispatch(authAC.updLoginForm(key, value));
    },

    refreshAccessToken: () => {
      dispatch(authAC.refreshToken());
    },
  };
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
