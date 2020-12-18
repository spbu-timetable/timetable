import accessTokenLocalStorage from "../../localStorage/accessToken";
import refreshTokenLocalStorage from "../../localStorage/refreshToken";
import AccountPage from "../../types/pages/AccountPage";

const account: AccountPage = {
  accessToken: accessTokenLocalStorage.set(),
  refreshToken: refreshTokenLocalStorage.set(),
};

export default account;
