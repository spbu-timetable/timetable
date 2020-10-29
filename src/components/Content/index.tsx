import React from "react";
import { Route, Switch } from "react-router-dom";
import Addresses from "./Addresses/container";
import Cabinets from "./Cabinets/container";
import Faculties from "./Faculties/container";
import Groups from "./Groups";
import Main from "./Main";
import style from "./style.module.css";
import Educators from "./Educators/container";
import Timetable from "./Timetable";
import StudyLevel from "./StudyLevels/container";
import EducationalProgram from "./EducationProgram/container"

const Content = () => {
  return (
    <div className={style.content}>
      <Switch>
        <Route path="/addresses/cabinets/timetable" component={() => <Timetable />} />
        <Route path="/addresses/cabinets" component={() => <Cabinets />} />
        <Route path="/teachers" component={() => <Educators />} />
        <Route path="/addresses" component={() => <Addresses />} />
        <Route path="/faculties/groups" component={() => <Groups />} />
        <Route path="/faculties/studyLevels/educationalPrograms" component={() => <EducationalProgram />} />
        <Route path="/faculties/studyLevels" component={() => <StudyLevel />} />
        <Route path="/faculties" component={() => <Faculties />} />
        <Route path="/" component={() => <Main />} />
      </Switch>
    </div>
  );
};

export default Content;
