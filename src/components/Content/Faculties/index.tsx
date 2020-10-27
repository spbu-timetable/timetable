import React from "react";
import style from "./style.module.css";

import Faculty from "../../../types/Faculty";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import CircularProgress from "@material-ui/core/CircularProgress";
import { useHistory } from "react-router-dom";
import Search from "../../Reusable/Search";
import Paper from "@material-ui/core/Paper";
import Banner from "../../Reusable/Banner";

type Props = {
  didGet: boolean;
  faculties: Faculty[];
  filtered_faculties: Faculty[];
  filter_value: string;

  getFaculties: () => void;
  setFaculty: (faculty: Faculty) => void;
  updFilter: (filterStr: string) => void;
};

const Faculties = (props: Props) => {
  const history = useHistory();

  function setFaculty(faculty: Faculty): void {
    props.setFaculty(faculty);
    history.push("/faculties/groups");
  }

  function createListItems(faculties: Faculty[]) {
    return faculties.map((faculty: Faculty) => (
      <ListItem key={faculty.Oid} button divider={true} onClick={() => setFaculty(faculty)}>
        <ListItemText primary={faculty.Name} />
      </ListItem>
    ));
  }

  let faculties_component;
  if (props.didGet) {
    props.filter_value !== ""
      ? (faculties_component = createListItems(props.filtered_faculties))
      : (faculties_component = createListItems(props.faculties));
  } else {
    props.getFaculties();
  }

  return (
    <div className={style.faculty}>
      <h1>Выберите Факультет</h1>
      <Search className={style.search} value={props.filter_value} updFilter={props.updFilter} />
      {props.didGet ? (
        <>
          {props.filter_value !== "" && props.filtered_faculties.length === 0 ? (
            <Banner
              mainText="Факультет не найден"
              secondaryText="Попробуйте ввести иначе или найти в списке"
            />
          ) : (
            <Paper className={style.list}>
              <List>{faculties_component}</List>
            </Paper>
          )}
        </>
      ) : (
        <CircularProgress className={style.progress} />
      )}
    </div>
  );
};

export default Faculties;
