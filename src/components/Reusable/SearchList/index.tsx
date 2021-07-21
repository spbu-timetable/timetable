import React from "react";
import useStyles from "./style";
import { Grid } from "@material-ui/core";
import Search from "../Search";
import List from "./List";
import Selected from "./Selected";

type Props = {
	received: boolean;

	items: any;
	get: () => void;

	multipleSelection?: boolean;
	selectedItems?: any;
	select?: (item: any) => void;
	deselect?: (item: any) => void;

	filterValue: string;
	updFilter: (filter: string) => void;

	startLoading: () => void;
	stopLoading: () => void;

	goNext: (args: any) => void;
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
		if (!props.selectedItems) throw new Error(`selectedItems ${message}`);
	}

	const searchProps = {
		value: props.filterValue,
		updFilter: props.updFilter,
	};

	const selectedProps = {
		items: props.selectedItems,
		deselect: props.deselect!,
		goNext: props.goNext,
	};

	const listProps = {
		items: props.items,
		select: props.select,
		goNext: props.goNext,
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
