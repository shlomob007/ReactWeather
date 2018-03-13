import { combineReducers } from "redux";
import weather, * as fromWeather from "./weather";
import favorites from "./favorites";

const weatherApp = combineReducers({
  weather: weather(),
  favorites
});

export default weatherApp;

export const getIsFetching = state => fromWeather.getIsFetching(state.weather);

export const getErrorMessage = state =>
  fromWeather.getErrorMessage(state.weather);
