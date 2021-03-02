import React from "react";
import style from "./style.module.css";
import HugeButton from "../../Reusable/HugeButton";

const Main = () => {
	return (
		<div className={style.main}>
			<h1 className={style.title}>Расписание СПбГУ</h1>
			<HugeButton title="Кабинеты" link="/addresses" />
			<HugeButton title="Преподаватели" link="/teachers" />
			<HugeButton title="Группы" link="/faculties" />
		</div>
	);
};

export default Main;
