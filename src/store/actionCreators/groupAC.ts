import Action from "../../types/Action";
import Group from "../../types/Group";
import ACTION from "./ACTION";

function getGroups(oid: string): Action {
  return {
    type: ACTION.GET_GROUPS,
    payload: oid,
  };
}

function setGroups(groups: Group[]): Action {
  return {
    type: ACTION.SET_GROUPS,
    payload: groups,
  };
}

function selectGroup(group: Group): Action {
  return {
    type: ACTION.SELECT_GROUP,
    payload: group,
  };
}

function deselectGroup(group: Group): Action {
  return {
    type: ACTION.DESELECT_GROUP,
    payload: group,
  };
}

function updFilter(filterStr: string | undefined): Action {
  return {
    type: ACTION.FILTER_GROUPS,
    payload: filterStr!,
  };
}

function cleanGroups(): Action {
  return {
    type: ACTION.CLEAN_GROUPS,
  };
}

function getGroupsTimetable(selected_groups: Group[], fromDate: Date, toDate: Date): Action {
  return {
    type: ACTION.GET_GROUPS_TIMETABLE,
    payload: {
      selected_groups: selected_groups,
      fromDate: fromDate,
      toDate: toDate,
    },
  };
}

const groupAC = {
  getGroups: getGroups,
  setGroups: setGroups,
  cleanGroups: cleanGroups,

  selectGroup: selectGroup,
  deselectGroup: deselectGroup,

  updFilter: updFilter,

  getGroupsTimetable: getGroupsTimetable,
};

export default groupAC;
