import React from "react";
import style from "./style.module.css";

import createTimetable from "./helpers/createTimetable";
import CircularProgress from "@material-ui/core/CircularProgress";
import ReactToPrint from "react-to-print";
import Button from "@material-ui/core/Button/Button";
import Print from "@material-ui/icons/Print";

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
              pageStyle="@page { 
                                size: auto;  
                                margin: 0mm; } 
                         @media print { 
                           body { 
                             -webkit-print-color-adjust: exact; 
                             height: 100vh; 
                            } 
                            table {
                              border-collapse: collapse;
                              table-layout: auto;
                              min-width: 95vw;

                              width: 100%;
                              margin-bottom: 4px; 
                              padding: 0;
                            }
                            tr {
                              margin: 0px; 
                              padding: 0px;
                            }
                            td {
                              margin: 0px; 
                              padding: 4px;
                              border: 1px solid black;
                            }
                            h5,h6 {
                              margin: 0px;
                              padding: 0px;  
                            }

                            }"
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
