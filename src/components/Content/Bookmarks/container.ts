import { connect } from "react-redux";
import { CombinedState } from "redux";
import Bookmarks from ".";
import Action from "../../../types/Action";
import AccountPage from "../../../types/pages/AccountPage";

function mapStateToProps(state: CombinedState<{ account: AccountPage }>) {
  return {
    user: state.account.user,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {};
}

const BookmarksContainer = connect(mapStateToProps, mapDispatchToProps)(Bookmarks);

export default BookmarksContainer;
