import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import { handleActions } from "redux-actions";

import * as actions from "./actions";

const uid = (() => {
  let id = 5;
  return () => id++;
})();

/**
 * POINTS
 */

const points = handleActions(
  {
    [actions.сreatePoint](state, { payload: name }) {
      return [...state, { id: uid(), name }];
    },
    [actions.deletePoint](state, { payload: id }) {
      return state.filter(point => point.id !== id);
    },
    [actions.reoderPoints](state, { payload }) {
      return payload;
    }
  },
  {}
);

export default combineReducers({
  form,
  points
});
