import User from "../User";

type AccountPage = {
  user?: User;
  accessToken: string | undefined;
  refreshToken: string | undefined;
};

export default AccountPage;
