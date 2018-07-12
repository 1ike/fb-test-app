import { createAction, createActions } from "redux-actions";

export const сreatePoint = createAction("CREATE_POINT");

export const { deletePoint, reoderPoints, changeCenter } = createActions(
  // {
  //   ACTION_ONE: (key, value) => ({ [key]: value })
  // },
  "DELETE_POINT",
  "REODER_POINTS",
  "CHANGE_CENTER"
);
