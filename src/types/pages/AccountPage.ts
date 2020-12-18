import User, { SavedItem } from "../User";

type AccountPage = {
  user?: User;
  accessToken: string | undefined;
  refreshToken: string | undefined;

  selectedCabinets: SavedItem[];
  filteredCabinets: SavedItem[];
  cabinetsFilterValue: string;

  selectedEducators: SavedItem[];
  filteredEducators: SavedItem[];
  educatorsFilterValue: string;

  selectedGroups: SavedItem[];
  filteredGroups: SavedItem[];
  groupsFilterValue: string;
};

export default AccountPage;
