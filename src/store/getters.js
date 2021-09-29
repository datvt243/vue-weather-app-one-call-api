export default {
  getKeyAPI(state) {
    return state.key_api;
  },
  getURLCurrent(state) {
    return state.urlCurrent;
  },
  getURLOneCall(state) {
    return state.urlOneCall;
  },
  getQuery(state) {
    return state.parameters.q;
  },
  getLat(state) {
    return state.parameters.lat;
  },
  getLon(state) {
    return state.parameters.lon;
  },
  getExclude(state) {
    return state.parameters.exclude;
  },
  getLang(state) {
    return state.parameters.lang;
  },
  getUnits(state) {
    return state.parameters.units;
  },
  getResult(state) {
    return state.result;
  },
  getWeatherCurrent(state) {
    return state.weather.current;
  },
  getWeatherOneCall(state) {
    return state.weather.onecall;
  },
  getError(state) {
    return state.error;
  },
  getListSearch(state) {
    return state.listSearch;
  },
};
