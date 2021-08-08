import React from "react";
import { Route, Switch } from "react-router-dom";
import Addresses from "./Addresses/";
import Cabinets from "./Addresses/Cabinets/";
import Faculties from "./Faculties/";
import Main from "./Main";
import style from "./style.module.css";
import Educators from "./Educators";
import Timetable from "../Reusable/Timetable/container";
import StudyLevel from "./Faculties/StudyLevels/";

const Content = () => {
	return (
		<div className={style.wrapper}>
			<Switch>
				<Route path="/addresses/:addressID/:cabinets" component={() => <Timetable />} />
				<Route path="/addresses/:addressID" component={() => <Cabinets />} />

				<Route path="/teachers/:teachers" component={() => <Timetable />} />
				<Route path="/teachers" component={() => <Educators />} />

				<Route path="/addresses" component={() => <Addresses />} />

				{/* <Route path="/faculties/studyLevels/educationalPrograms/educationYears/Groups" component={() => <Groups />} />
				<Route path="/faculties/studyLevels/educationalPrograms/educationYears" component={() => <EducationYears />} />
				<Route path="/faculties/studyLevels/educationalPrograms" component={() => <EducationalProgram />} /> */}
				{/* <Route path="/faculties/studyLevels" component={() => <StudyLevel />} /> */}
				<Route path="/faculties" component={() => <Faculties />} />

				<Route path="/" component={() => <Main />} />
			</Switch>
		</div>
	);
};

export default Content;
