import DateFnsUtils from "@date-io/date-fns";
import ruLocale from "date-fns/locale/ru";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { DatePicker } from "@material-ui/pickers/DatePicker/DatePicker";
import MuiPickersUtilsProvider from "@material-ui/pickers/MuiPickersUtilsProvider";
import React from "react";
import style from "./style.module.css";

import withStyles from "@material-ui/core/styles/withStyles";
import startOfWeek from "date-fns/startOfWeek";
import endOfWeek from "date-fns/endOfWeek";
import isWithinInterval from "date-fns/isWithinInterval";
import isSameDay from "date-fns/isSameDay";
import IconButton from "@material-ui/core/IconButton";
import format from "date-fns/format";
import { Theme } from "@material-ui/core/styles";

import makeStyles from "@material-ui/core/styles/makeStyles";
import clsx from "clsx";

type Props = {
  className?: string;

  fromDateStr: string;
  toDateStr: string;

  isDisabled: boolean;

  setWeek: (date: Date) => void;
};

const useStyles = makeStyles((theme: Theme) => ({
  dayWrapper: {
    position: "relative",
  },
  day: {
    width: 36,
    height: 36,
    fontSize: theme.typography.caption.fontSize,
    margin: "0 2px",
    color: "inherit",
  },
  customDayHighlight: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: "2px",
    right: "2px",
    border: `1px solid ${theme.palette.secondary.main}`,
    borderRadius: "50%",
  },
  nonCurrentMonthDay: {
    color: theme.palette.text.disabled,
  },
  highlightNonCurrentMonthDay: {
    color: "#676767",
  },
  highlight: {
    background: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  firstHighlight: {
    extend: "highlight",
    borderTopLeftRadius: "50%",
    borderBottomLeftRadius: "50%",
  },
  endHighlight: {
    extend: "highlight",
    borderTopRightRadius: "50%",
    borderBottomRightRadius: "50%",
  },
}));

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
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date());

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    props.setWeek(date!);
  };

 const renderWrappedWeekDay = (day: Date | null, selectedDate: Date | null, dayInCurrentMonth: boolean) => {
    const start = startOfWeek(selectedDate!,{locale: ruLocale});
    const end = endOfWeek(selectedDate!,{locale: ruLocale});

    const dayIsBetween = isWithinInterval(day!, { start, end });
    const isFirstDay = isSameDay(day!, start);
    const isLastDay = isSameDay(day!, end);

    const wrapperClassName = clsx({
      [classes.highlight]: dayIsBetween,
      [classes.firstHighlight]: isFirstDay,
      [classes.endHighlight]: isLastDay,
    });

    const dayClassName = clsx(classes.day, {
      [classes.nonCurrentMonthDay]: !dayInCurrentMonth,
      [classes.highlightNonCurrentMonthDay]: !dayInCurrentMonth && dayIsBetween,
    });

    return (
      <div className={wrapperClassName}>
        <IconButton className={dayClassName}>
          <span> {format(day!, "d")} </span>
        </IconButton>
      </div>
    );
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
      <Button
        onClick={() => {
          if (!props.isDisabled) {
            setOpen(!open);
          }
        }}
      >
        {props.fromDateStr + " - " + props.toDateStr}
      </Button>

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
        renderDay={renderWrappedWeekDay}
        TextFieldComponent={() => <StyledTextField className={style.date_picker} variant="outlined" value="" />}
      />
    </MuiPickersUtilsProvider>
  );
};

export default Picker;
