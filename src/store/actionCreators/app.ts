import { AnyAction } from "redux";
import ACTION from "./ACTION";

const setLoader = (): AnyAction => ({
	type: ACTION.SET_LOADER,
});

const stopLoader = (): AnyAction => ({
	type: ACTION.STOP_LOADER,
});

export default { setLoader, stopLoader };
