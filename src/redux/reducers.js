import { combineReducers } from "redux";
import { reducer as form } from "redux-form";
import { handleActions } from "redux-actions";

import * as actions from "./actions";

const points = handleActions(
  {
    [actions.createPoint](state, { payload: point }) {
      return [...state, point];
    },
    [actions.deletePoint](state, { payload: id }) {
      return state.filter(point => point.id !== id);
    },
    [actions.shiftPoint](
      state,
      {
        payload: { id, coordinates }
      }
    ) {
      return state.map(point => {
        if (point.id !== id) return point;
        point.placemark.geometry.coordinates = coordinates;
        return point;
      });
    },
    [actions.reoderPoints](state, { payload: points }) {
      return points;
    }
  },
  []
);

const center = handleActions(
  {
    [actions.shiftCenter](state, { payload }) {
      return payload;
    }
  },
  [55.76, 37.64]
);

export default combineReducers({
  form,
  points,
  center
});
