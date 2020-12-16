import { CombinedState } from "redux";

import Address from ".";
import { connect } from "react-redux";
import Action from "../../types/Action";
import authAC from "../../store/actionCreators/authAC";
import LoginPage from "../../types/pages/LoginPage";

function mapStateToProps(
  state: CombinedState<{
    login: LoginPage;
  }>
) {
  return {
    email: state.login.email,
    password: state.login.password,
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

    updForm: (key: string, value: string) => {
      dispatch(authAC.updLoginForm(key, value));
    },
  };
}

const AddressContainer = connect(mapStateToProps, mapDispatchToProps)(Address);

export default AddressContainer;
