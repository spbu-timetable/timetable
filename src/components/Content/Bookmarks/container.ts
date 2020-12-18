import { connect } from "react-redux";
import { CombinedState } from "redux";
import Bookmarks from ".";
import authAC from "../../../store/actionCreators/authAC";
import Action from "../../../types/Action";
import AccountPage from "../../../types/pages/AccountPage";

function mapStateToProps(state: CombinedState<{ account: AccountPage }>) {
  return {
    user: state.account.user,
    accessToken: state.account.accessToken,
    refreshToken: state.account.refreshToken,
  };
}

function mapDispatchToProps(dispatch: (action: Action) => void) {
  return {
    getUser: () => {
      dispatch(authAC.getUser());
    },

    refreshAccessToken: () => {
      dispatch(authAC.refreshToken());
    },
  };
}

const BookmarksContainer = connect(mapStateToProps, mapDispatchToProps)(Bookmarks);

export default BookmarksContainer;
