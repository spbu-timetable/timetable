import React from "react";
import style from "./style.module.css";
import HugeButton from "../../Reusable/HugeButton";
import PATH from "../../../PATH";

const Main = () => {
	return (
		<div className={style.main}>
			<h1 className={style.title}>Расписание СПбГУ</h1>
			<HugeButton title="Кабинеты" link={`${PATH.ADDRESSES}`} />
			<HugeButton title="Преподаватели" link={`${PATH.EDUCATORS}`} />
			<HugeButton title="Группы" link={`${PATH.FACULTIES}`} />
		</div>
	);
};

export default Main;
