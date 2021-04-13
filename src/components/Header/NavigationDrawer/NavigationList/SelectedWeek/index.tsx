import Container from "@material-ui/core/Container";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import React from "react";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import MobileDatePicker from "@material-ui/lab/MobileDatePicker";
import withStyles from "@material-ui/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import PickersDay, { PickersDayProps } from "@material-ui/lab/PickersDay";

type Props = {
	fromDateStr: string;
	toDateStr: string;

	setWeek: (date: Date) => void;
};

const useStyles = makeStyles((theme) => ({
	button: {
		borderRadius: 4,
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: theme.palette.grey[300],
		color: theme.palette.primary.contrastText,
		textAlign: "center",
		padding: theme.spacing(1),
		margin: theme.spacing(1),

		"&:hover, &:focus": {
			cursor: "pointer",
			backgroundColor: theme.palette.grey[200],
		},
	},

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
		position: "absolute",
		width: 0,
		height: 0,
	},
})(TextField);

const SelectedWeek: React.FC<Props> = (props: Props) => {
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
			<ListItem component={Typography} align="center">
				<Container className={classes.button} onClick={() => setOpen(!open)}>
					<Typography variant="button">{props.fromDateStr + " — " + props.toDateStr}</Typography>
				</Container>
			</ListItem>

			<LocalizationProvider dateAdapter={AdapterDateFns}>
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
