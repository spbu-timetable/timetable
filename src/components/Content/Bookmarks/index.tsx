import React from "react";
import style from "./style.module.css";
import { Redirect } from "react-router-dom";
import User from "../../../types/User";
import HugeButton from "../../Reusable/HugeButton";
import accessTokenLocalStorage from "../../../localStorage/accessToken";
import refreshTokenLocalStorage from "../../../localStorage/refreshToken";

type Props = {
  user?: User;

  getUser: () => void;
  refreshAccessToken: () => void;
};

const Bookmarks = (props: Props) => {
  if (!props.user) {
    props.getUser();
  }

  if (!accessTokenLocalStorage.set()) {
    props.refreshAccessToken();
  }

  return (
    <div>
      <h1 className={style.header}>Закладки</h1>
      {refreshTokenLocalStorage.set() ? (
        <div className={style.categories_wrapper}>
          <HugeButton title="Кабинеты" link="/bookmarks/cabinets" />
          <HugeButton title="Преподаватели" link="/bookmarks/educators" />
          <HugeButton title="Группы" link="/bookmarks/groups" />
        </div>
      ) : (
        <Redirect to="/login" />
      )}
    </div>
  );
};

export default Bookmarks;
