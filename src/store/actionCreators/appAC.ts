import Action from "../../types/Action";
import Alert from "../../types/Alert";
import ACTION from "./ACTION";


function setAlert(alert: Alert): Action {
  return {
    type: ACTION.ALERT,
    payload: alert,
  };
}

function cleanAlert(): Action {
  return {
    type: ACTION.CLEAN_ALERT,
  };
}

const appAC = {
  setAlert: setAlert,
  cleanAlert: cleanAlert,
};

export default appAC;
