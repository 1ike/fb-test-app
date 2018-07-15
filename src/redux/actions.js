import { createActions } from "redux-actions";

export const {
  createPoint,
  deletePoint,
  shiftPoint,
  reoderPoints,
  shiftCenter
} = createActions(
  // {
  //   ACTION_ONE: (key, value) => ({ [key]: value })
  // },
  "CREATE_POINT",
  "DELETE_POINT",
  "SHIFT_POINT",
  "REODER_POINTS",
  "SHIFT_CENTER"
);
