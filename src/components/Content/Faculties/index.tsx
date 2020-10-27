import React from "react";

import Faculty from "../../../types/Faculty";
import SearchListPage from "../../../hocs/SearchListPage";

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
  return (
    <SearchListPage
      didGet={props.didGet}
      url_to_push={"/faculties/groups"}
      items={props.faculties}
      filtered_items={props.filtered_faculties}
      filter_value={props.filter_value}
      header_text={"Выберите Факультет"}
      banner_main_text={"Факультет не найден"}
      banner_secondary_text={"Попробуйте ввести иначе или найти в списке"}
      getItems={props.getFaculties}
      setItem={props.setFaculty}
      updFilter={props.updFilter}
    />
  );
};

export default Faculties;
