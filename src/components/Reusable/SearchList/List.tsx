import React from "react";

import { Paper, ListItem, ListItemText, List } from "@material-ui/core";
import useStyles from "./style";
import getObjectName from "../../../helpers/getObjectName";

type Props = {
	items: any;

	select?: (item: any) => void;
	goNext?: (args: any) => void;
};

const MyList = (props: Props) => {
	const style = useStyles();

	const items: JSX.Element[] = props.items.map((item: any, i: number) => {
		let action = () => {};
		if (props.goNext) action = () => props.goNext!(item);
		if (props.select) action = () => props.select!(item);

		return (
			<ListItem key={i} button onClick={action}>
				<ListItemText primary={getObjectName(item)} />
			</ListItem>
		);
	});

	const body = <List className={style.item}>{items}</List>;

	return <Paper variant="outlined">{body}</Paper>;
};

export default MyList;
