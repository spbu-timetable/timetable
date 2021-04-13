import React from "react";
import Drawer from "@material-ui/core/Drawer";
import IconButton from "@material-ui/core/IconButton";
import Anchor from "../../../types/Anchor";
import NavigationList from "./NavigationList";
import Menu from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
	drawer: {
		borderRadius: "0 0 8px 8px",
	},
}));

const Navigation: React.FC = () => {
	const classes = useStyles();

	const [open, setOpen] = React.useState(false);
	const [anchor, setAnchor] = React.useState<Anchor>("top");

	React.useEffect(() => (window.innerWidth > 600 ? setAnchor("left") : setAnchor("top")));

	const toggleDrawer = (anchor: Anchor, open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
		if (
			event.type === "keydown" &&
			((event as React.KeyboardEvent).key === "Tab" || (event as React.KeyboardEvent).key === "Shift")
		) {
			return;
		}

		setAnchor(anchor);
		setOpen(open);
	};

	return (
		<>
			<IconButton onClick={() => setOpen(!open)}>
				<Menu />
			</IconButton>
			<Drawer
				PaperProps={{
					className: anchor === "top" ? classes.drawer : "",
				}}
				anchor={anchor}
				open={open}
				onClose={toggleDrawer(anchor, false)}
			>
				<NavigationList />
			</Drawer>
		</>
	);
};

export default Navigation;
