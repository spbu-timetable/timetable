import { CombinedState } from "redux";

import Address from ".";
import { connect } from "react-redux";
import Action from "../../types/Action";
import authAC from "../../store/actionCreators/authAC";
import RegistrationPage from "../../types/pages/RegisterPage";
import AccountPage from "../../types/pages/AccountPage";

function mapStateToProps(
  state: CombinedState<{
    register: RegistrationPage;
    account: AccountPage;
  }>
) {
  return {
    name: state.register.name,
    email: state.register.email,
    password: state.register.password,
    password2: state.register.password2,

    refreshToken: state.account.refreshToken!,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    register: (name: string, email: string, password: string) => {
      dispatch(authAC.register(name, email, password));
    },

    updForm: (key: string, value: string) => {
      dispatch(authAC.updRegisterForm(key, value));
    },
  };
}

const AddressContainer = connect(mapStateToProps, mapDispatchToProps)(Address);

export default AddressContainer;
