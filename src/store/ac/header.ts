import { AnyAction } from "redux";
import ACTION from "./ACTION";

function setButtonTitle(title: string): AnyAction {
	return {
		type: ACTION.SET_HEADER_BUTTON_TITLE,
		payload: title,
	};
}

function setWeek(date: Date): AnyAction {
	return {
		type: ACTION.SET_WEEK,
		payload: date,
	};
}

function setLang(isRussian: boolean): AnyAction {
	return {
		type: ACTION.SET_LANG,
		payloaf: isRussian,
	};
}

const header = {
	setButtonTitle: setButtonTitle,
	setWeek: setWeek,
	setLang: setLang,
};

export default header;
