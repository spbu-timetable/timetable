import DateFnsUtils from "@date-io/date-fns";
import ruLocale from "date-fns/locale/ru";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { DatePicker } from "@material-ui/pickers/DatePicker/DatePicker";
import MuiPickersUtilsProvider from "@material-ui/pickers/MuiPickersUtilsProvider";
import React from "react";
import style from "./style.module.css";

import withStyles from "@material-ui/core/styles/withStyles";

type Props = {
  className?: string;

  fromDateStr: string;
  toDateStr: string;

  setWeek: (date: Date) => void;
};

const StyledTextField = withStyles({
  root: {
    "& .MuiInput-underline:after": {
      borderBottomColor: "rgba(0, 0, 0, 0.0)",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(0, 0, 0, 0.0)",
      },
      "&:hover fieldset": {
        borderColor: "rgba(0, 0, 0, 0.0)",
      },
      "&.Mui-focused fieldset": {
        borderColor: "rgba(0, 0, 0, 0.0)",
      },
    },
  },
})(TextField);

const Picker = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    props.setWeek(date!);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
      <Button onClick={() => setOpen(!open)}>{props.fromDateStr + " - " + props.toDateStr}</Button>

      <DatePicker
        autoOk={true}
        open={open}
        variant="dialog"
        value={selectedDate}
        onChange={handleDateChange}
        animateYearScrolling={false}
        onClose={() => {
          setOpen(false);
        }}
        TextFieldComponent={() => (
          <StyledTextField className={style.date_picker} variant="outlined" value="" />
        )}
      />
    </MuiPickersUtilsProvider>
  );
};

export default Picker;
