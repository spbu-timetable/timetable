export type SavedItem = {
  id: string;
  name: string;
};

type User = {
  name: string;
  email: string;
  savedEducators: SavedItem[];
  savedGroups: SavedItem[];
  savedCabinets: SavedItem[];
  savedTables: SavedItem[];
};

export default User;
