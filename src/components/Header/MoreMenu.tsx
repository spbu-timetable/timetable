import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Typography from "@material-ui/core/Typography";
import { AccountCircle } from "@material-ui/icons";
import ExitToApp from "@material-ui/icons/ExitToApp";
import MoreVert from "@material-ui/icons/MoreVert";
import React from "react";
import { useLocation } from "react-router-dom";
import style from "./style.module.css";

type Props = {
	fromDateStr: string;
	toDateStr: string;

	isDisabled: boolean;

	setWeek: (date: Date) => void;
};

const MoreMenu: React.FC<Props> = (props: Props) => {
	let location = useLocation();

	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

	const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const [open, setOpen] = React.useState(false);
	const [selectedDate, setSelectedDate] = React.useState<Date | null>(new Date());

	const handleDateChange = (date: Date | null) => {
		setSelectedDate(date);
		props.setWeek(date!);
	};

	return (
		<div>
			<IconButton edge="end" color="inherit" onClick={handleClick}>
				<MoreVert />
			</IconButton>

			<Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={handleClose}>
				<MenuItem className={style.item} onClick={handleClose}>
					<ListItemIcon>
						<AccountCircle />
					</ListItemIcon>
					<Typography>Аккаунт</Typography>
				</MenuItem>
				<MenuItem className={style.item} onClick={handleClose}>
					<ListItemIcon>
						<ExitToApp />
					</ListItemIcon>
					<Typography>Выйти</Typography>
				</MenuItem>
			</Menu>
		</div>
	);
};

export default MoreMenu;
