import { Button, Chip, Fade, Grid } from "@material-ui/core";
import React from "react";
import getObjectID from "../../../helpers/getObjectID";
import getObjectName from "../../../helpers/getObjectName";
import useStyles from "./style";

type Props = {
	items: any;
	deselect: (item: any) => void;

	goNext: (args: any) => void;
};

const Selected = (props: Props) => {
	const style = useStyles();

	const goNext = () => {
		const ids = props.items.map((item: any) => getObjectID(item)).join("+");
		props.goNext(ids);
	};

	const chips = props.items.map((item: any, i: number) => (
		<Grid key={getObjectName(item)} item className={style.chip}>
			<Chip label={getObjectName(item)} onDelete={() => props.deselect(item)} />
		</Grid>
	));

	return (
		<Fade in={props.items.length > 0}>
			<Grid container className={style.item}>
				<Grid container className={style.chipsWrapper}>
					{chips}
				</Grid>
				<Grid item>
					{props.items.length > 0 ? (
						<Button variant="contained" color="secondary" onClick={goNext} disableElevation>
							Показать
						</Button>
					) : (
						<></>
					)}
				</Grid>
			</Grid>
		</Fade>
	);
};

export default Selected;
