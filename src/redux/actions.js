import { createAction } from "redux-actions";

/**
 * POINTS
 */

// Create point
export const сreatePoint = createAction("CREATE_POINT");

// Delete point
export const deletePoint = createAction("DELETE_POINT");

// Reoder points
export const reoderPoints = createAction("REODER_POINTS");
