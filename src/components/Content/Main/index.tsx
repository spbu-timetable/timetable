import React from "react";
import style from "./style.module.css";
import HugeButton from "../../Reusable/HugeButton";

const Main = () => {
	return (
		<div className={style.main}>
			<HugeButton className={style.item} title="Кабинеты" link="/addresses" />
			<HugeButton className={style.item} title="Преподаватели" link="/teachers" />
			<HugeButton className={style.item} title="Группы" link="/faculties" />
		</div>
	);
};

export default Main;
