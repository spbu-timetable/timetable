import { connect } from "react-redux";
import { CombinedState } from "redux";
import Content from ".";
import authAC from "../../store/actionCreators/authAC";
import Action from "../../types/Action";
import AccountPage from "../../types/pages/AccountPage";

function mapStateToProps(
  state: CombinedState<{
    account: AccountPage;
  }>
) {
  return {
    needToRegister: state.account.needToRegister,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    showLoginBtn: () => {
      dispatch(authAC.showLoginBtn());
    },
  };
}

const ContentContainer = connect(mapStateToProps, mapDispatchToProps)(Content);

export default ContentContainer;
