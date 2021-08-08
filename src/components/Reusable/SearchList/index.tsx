import React from "react";
import useStyles from "./style";
import { Grid } from "@material-ui/core";
import Search from "../Search";
import List from "./List";
import Selected from "./Selected";

type Props = {
	received: boolean;

	items: any;
	get: (args?: any) => void;

	multipleSelection?: boolean;
	selected?: any;
	select?: (item: any) => void;
	deselect?: (item: any) => void;

	filter: string;
	updFilter: (filter: string) => void;

	startLoading: () => void;
	stopLoading: () => void;

	next: (args: any) => void;
};

/**
 *
 * @param props
 * @returns {JSX.Element}
 */
const SearchList = (props: Props) => {
	const style = useStyles();

	React.useEffect(() => {
		if (!props.received) {
			props.startLoading();
			props.get();
		} else {
			props.stopLoading();
		}
	}, [props.received]);

	if (props.multipleSelection) {
		const message = "must be defined if multipleSelection flag is true";
		if (!props.select) throw new Error(`select method ${message}`);
		if (!props.deselect) throw new Error(`deselect method ${message}`);
		if (!props.selected) throw new Error(`selectedItems ${message}`);
	}

	const searchProps = {
		value: props.filter,
		updFilter: props.updFilter,
	};

	const selectedProps = {
		items: props.selected,
		deselect: props.deselect!,
		goNext: props.next,
	};

	const listProps = {
		items: props.items,
		select: props.select,
		goNext: props.next,
	};

	return (
		<Grid container className={style.wrapper}>
			<Grid container>
				<Search {...searchProps} />
			</Grid>

			{props.multipleSelection ? <Selected {...selectedProps} /> : <></>}

			<Grid container className={style.item}>
				{props.received ? <List {...listProps} /> : <></>}
			</Grid>
		</Grid>
	);
};

export default SearchList;
