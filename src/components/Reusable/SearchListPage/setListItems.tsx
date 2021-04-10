import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Typography from "@material-ui/core/Typography";
import Add from "@material-ui/icons/Add";
import React from "react";
import getObjectName from "../../../helpers/getObjectName";

function checkSelection(item: any, selected_items: any): boolean {
	// if (selected_items.length === 4) {
	//   return true;
	// }

	function didFind(element: any, _index: any, _array: any): boolean {
		return getObjectName(element) === getObjectName(item) ? true : false;
	}

	for (let i = 0; i < selected_items.length; i++) {
		if (selected_items.find(didFind, item)) {
			return true;
		}
	}
	return false;
}

function createListItems(
	items: any,
	selected_items: any,
	url: string,
	setItem: (item: any) => void,
	setAddress: (url: string) => void
) {
	const list_items = [];

	for (let i = 0; i < items.length; i++) {
		list_items.push(
			<ListItem
				key={i}
				button
				disabled={selected_items === undefined ? false : checkSelection(items[i], selected_items)}
				divider={i === items.length - 1 ? false : true}
				onClick={() => {
					if (selected_items === undefined) {
						setItem(items[i]);
						setAddress(url);
					} else {
						setItem(items[i]);
					}
				}}
			>
				<ListItemText primary={<Typography color="textPrimary">{getObjectName(items[i])}</Typography>} />
				{selected_items !== undefined ? (
					<ListItemSecondaryAction>
						<IconButton
							edge="end"
							disabled={checkSelection(items[i], selected_items)}
							onClick={() => setItem!(items[i])}
						>
							<Add />
						</IconButton>
					</ListItemSecondaryAction>
				) : (
					<></>
				)}
			</ListItem>
		);
	}
	return list_items;
}

function setListItems(
	oid: string,
	didGet: boolean,
	filter_value: string,
	items: any,
	filtered_items: any,
	selected_items: any,
	selected_item: any,
	url_to_push: string,
	setItem: (item: any) => void,
	setAddress: () => void,
	getItems: (oid?: string) => void,
	getSelectedItems: (selected_item: any) => void
) {
	if (didGet) {
		if (filter_value !== "") {
			return createListItems(filtered_items, selected_items, url_to_push!, setItem!, setAddress);
		} else if (items !== undefined) {
			return createListItems(items, selected_items, url_to_push!, setItem!, setAddress);
		}
	} else {
		if (getItems !== undefined) {
			oid === undefined ? getItems!() : getItems!(oid);
		}
		if (getSelectedItems !== undefined) {
			getSelectedItems(selected_item!);
		}
	}
}

export default setListItems;
