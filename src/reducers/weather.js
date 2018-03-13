import { combineReducers } from "redux";

const weather = () => {
  const data = (state = {}, action) => {
    switch (action.type) {
      case "FETCH_WEATHER_SUCCESS":
        return { ...action.response };
      case "FETCH_WEATHER_REQUEST":
      case "FETCH_WEATHER_FAILURE":
      default:
        return state;
    }
  };

  const isFetching = (state = false, action) => {
    switch (action.type) {
      case "FETCH_WEATHER_REQUEST":
        return true;
      case "FETCH_WEATHER_SUCCESS":
      case "FETCH_WEATHER_FAILURE":
        return false;
      default:
        return state;
    }
  };

  const errorMessage = (state = null, action) => {
    switch (action.type) {
      case "FETCH_TODOS_FAILURE":
        return action.message;
      case "FETCH_TODOS_REQUEST":
      case "FETCH_TODOS_SUCCESS":
        return null;
      default:
        return state;
    }
  };

  return combineReducers({
    data,
    isFetching,
    errorMessage
  });
};

export default weather;

export const getIsFetching = state => state.isFetching;
export const getErrorMessage = state => state.errorMessage;
