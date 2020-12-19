import accessTokenLocalStorage from "../../localStorage/accessToken";
import refreshTokenLocalStorage from "../../localStorage/refreshToken";
import AccountPage from "../../types/pages/AccountPage";

const account: AccountPage = {
  needToRegister: false,

  accessToken: accessTokenLocalStorage.set(),
  refreshToken: refreshTokenLocalStorage.set(),

  selectedCabinets: [],
  filteredCabinets: [],
  cabinetsFilterValue: "",

  selectedEducators: [],
  filteredEducators: [],
  educatorsFilterValue: "",

  selectedGroups: [],
  filteredGroups: [],
  groupsFilterValue: "",
};

export default account;
