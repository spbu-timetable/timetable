import { AnyAction } from "redux";
import ACTION from "./ACTION";

const setLoader = (): AnyAction => ({
	type: ACTION.SET_LOADER,
});

const stopLoader = (): AnyAction => ({
	type: ACTION.STOP_LOADER,
});

const setLayout = (isMobile: boolean): AnyAction => ({
	type: ACTION.SET_LAYOUT,
	payload: isMobile,
});

export default { setLoader, stopLoader, setLayout };
