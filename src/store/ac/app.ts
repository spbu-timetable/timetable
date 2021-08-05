import { AnyAction } from "redux";
import ACTION from "./ACTION";

const startLoading = (): AnyAction => ({
	type: ACTION.SET_LOADING,
});

const stopLoading = (): AnyAction => ({
	type: ACTION.STOP_LOADING,
});

const setLayout = (isMobile: boolean): AnyAction => ({
	type: ACTION.SET_LAYOUT,
	payload: isMobile,
});

export default { startLoading, stopLoading, setLayout };
