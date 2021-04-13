import React from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizaitonProvider from "@material-ui/lab/LocalizationProvider";
import DatePicker from "@material-ui/lab/DatePicker";
import PickersDay, { PickersDayProps } from "@material-ui/lab/PickersDay";
import withStyles from "@material-ui/styles/withStyles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import { CalendarToday } from "@material-ui/icons";

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

const StyledTextField = withStyles({
	root: {
		overflow: "hidden",
		width: 100,
		height: 0,
	},
})(TextField);

type Props = {
	className?: string;

	fromDateStr: string;
	toDateStr: string;

	isDisabled: boolean;

	setWeek: (date: Date) => void;
};

const CustomDay: React.FC<Props> = (props: Props) => {
	const classes = useStyles();

	const [open, setOpen] = React.useState(false);
	const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date());

	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
		props.setWeek(date!);
		setOpen(false);
	};

	const renderWeekPickerDay = (date: Date, _selectedDates: Date[], pickersDayProps: PickersDayProps<Date>) => {
		return <PickersDay {...pickersDayProps} className={classes.highlight} />;
	};

	return (
		<>
			<LocalizaitonProvider dateAdapter={AdapterDateFns}>
				<DatePicker
					open={open}
					value={selectedDate}
					onChange={handleDateChange}
					renderDay={renderWeekPickerDay as any}
					renderInput={(params) => <StyledTextField {...params} />}
				/>
			</LocalizaitonProvider>

			{window.innerWidth > 600 ? (
				<Button
					color="secondary"
					onClick={() => {
						if (!props.isDisabled) {
							setOpen(!open);
						}
					}}
				>
					{props.fromDateStr + " - " + props.toDateStr}
				</Button>
			) : (
				<IconButton
					onClick={() => {
						if (!props.isDisabled) {
							setOpen(!open);
						}
					}}
				>
					<CalendarToday />
				</IconButton>
			)}
		</>
	);
};

export default CustomDay;
