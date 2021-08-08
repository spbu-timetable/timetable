import React from "react";
import style from "./style.module.css";
import HugeButton from "../../Reusable/HugeButton";
import { useHistory } from "react-router-dom";

const Main = () => {
	const history = useHistory();

	return (
		<div className={style.main}>
			<HugeButton className={style.item} title="Кабинеты" onClick={() => history.push("/addresses")} />
			{/* <HugeButton className={style.item} title="Преподаватели" onClick={() => history.push("/teachers")} />
			<HugeButton className={style.item} title="Группы" onClick={() => history.push("/faculties")} /> */}
		</div>
	);
};

export default Main;
