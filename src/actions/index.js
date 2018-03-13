import * as api from "../api";
import { getIsFetching } from "../reducers";

export const fetchWeather = id => (dispatch, getState) => {
  if (getIsFetching(getState())) {
    return Promise.resolve();
  }

  dispatch({
    type: "FETCH_WEATHER_REQUEST",
    id
  });

  return api.fetchWeather(id).then(
    response => {
      dispatch({
        type: "FETCH_WEATHER_SUCCESS",
        id,
        response: response.data
      });
    },
    error => {
      dispatch({
        type: "FETCH_WEATHER_FAILURE",
        id,
        message: error.message || "Something went wrong."
      });
    }
  );
};

export const addToFavorits = city => (dispatch, getState) => {
  dispatch({
    type: "ADD_TO_FAVORITES",
    city
  });
};

export const removeFromFavorites = id => (dispatch, getState) => {
  dispatch({
    type: "REMOVE_FROM_FAVORITES",
    id
  });
};

export const reorderFavorites = (startIndex, endIndex) => (
  dispatch,
  getState
) => {
  dispatch({
    type: "REORDER_FAVORITES",
    startIndex,
    endIndex
  });
};
