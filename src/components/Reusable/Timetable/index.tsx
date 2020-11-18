import React from "react";
import style from "./style.module.css";

import createTimetable from "./helpers/createTimetable";
import CircularProgress from "@material-ui/core/CircularProgress";
import ReactToPrint from "react-to-print";
import Button from "@material-ui/core/Button/Button";
import Print from "@material-ui/icons/Print";
import printStyle from "./pagePrinStyle";

type Props = {
  didGet: boolean;
  items: string[];
  timetable: any;
};

const TimetableList = (props: Props) => {
  const componentRef: React.RefObject<HTMLDivElement> = React.useRef<
    HTMLDivElement
  >(null);

  const timetable = props.didGet
    ? createTimetable(props.timetable, props.items)
    : [];

  return (
    <div className={style.wrapper}>
      {props.didGet ? (
        <>
          <div className={style.tools}>
            {props.items.length > 1 ? (
              <h1 className={style.header}>Кабинеты</h1>
            ) : (
              <h1 className={style.header}>Кабинет {props.items[0]}</h1>
            )}
            <ReactToPrint
              copyStyles={false}
              fonts={[
                {
                  family: "Roboto",
                  source:
                    "https://fonts.googleapis.com/css2?family=Roboto&display=swap",
                },
              ]}
              pageStyle={printStyle}
              trigger={() => (
                <Button
                  className={style.print}
                  variant="contained"
                  color="primary"
                  startIcon={<Print />}
                >
                  Печать
                </Button>
              )}
              content={() => componentRef.current}
            />
          </div>
          <div ref={componentRef}>{timetable}</div>
        </>
      ) : (
        <CircularProgress />
      )}
    </div>
  );
};

export default TimetableList;
