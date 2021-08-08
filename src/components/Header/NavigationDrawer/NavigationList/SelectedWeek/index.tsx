import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import ruLocale from "date-fns/locale/ru";
import { makeStyles } from "@material-ui/core";
import React from "react";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import MobileDatePicker from "@material-ui/lab/MobileDatePicker";
import PickersDay, { PickersDayProps } from "@material-ui/lab/PickersDay";
import SetWeekBtn from "./SetWeekBtn";
import header from "../../../../../store/header";

const useStyles = makeStyles((theme) => ({
	highlight: {
		borderRadius: "50%",
		backgroundColor: theme.palette.secondary.main,
		color: theme.palette.common.white,
		"&:hover, &:focus": {
			borderRadius: "50%",
			backgroundColor: theme.palette.secondary.main,
		},
	},
}));

const SelectedWeek = () => {
	const classes = useStyles();

	const [open, setOpen] = React.useState(false);
	const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date());

	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
		header.setWeek(date!);
		setOpen(false);
	};

	const renderWeekPickerDay = (date: Date, _selectedDates: Date[], pickersDayProps: PickersDayProps<Date>) => {
		return <PickersDay {...pickersDayProps} className={classes.highlight} />;
	};

	return (
		<>
			<ListItem component={Typography} align="center">
				<SetWeekBtn onClick={() => setOpen(!open)} fromDateStr={header.fromDateStr} toDateStr={header.toDateStr} />
			</ListItem>

			<LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
				<MobileDatePicker
					open={open}
					value={selectedDate}
					onChange={handleDateChange}
					renderDay={renderWeekPickerDay as any}
					renderInput={() => <></>}
				/>
			</LocalizationProvider>
		</>
	);
};

export default SelectedWeek;
