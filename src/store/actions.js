export default {
  /**
   * exclude = current | minutely | hourly | daily | alerts
   */
  async fetchDataWeather({ commit, state }, { lat = null, lon = null }) {
    let appid = `appid=${state.key_api}`;
    let q = `${state.parameters.q}`;
    let units = `units=${state.parameters.units}`;
    let lang = `lang=${state.parameters.lang}`;
    let exclude = "exclude=minutely,hourly,daily";
    let stringAPICurrent = `${state.urlCurrent}?q=${q}&${lang}&${units}&${exclude}&${appid}`;
    if (lat && lon) stringAPICurrent += `&lat=${lat}&lon=${lon}`;

    await fetch(stringAPICurrent)
      .then((response) => response.json())
      .then((data) => {
        commit("setLat", lat);
        commit("setLon", lon);
        if (+data.cod === 200) {
          commit("setWeatherCurrent", data);
          commit("setError", { err: false, value: null });
          if (q) commit("setListSearch", q);
          commit("setQuery", "");
        } else {
          commit("setError", { err: true, value: state.parameters.q });
        }
      });

    let lat02 = `lat=${state.parameters.lat}`;
    let lon02 = `lon=${state.parameters.lon}`;
    let excludeOneCall = "exclude=current,minutely,hourly";
    let stringAPIOneCall = `${state.urlOneCall}?${lang}&${units}&${excludeOneCall}&${appid}&${lat02}&${lon02}`;
    await fetch(stringAPIOneCall)
      .then((response) => response.json())
      .then((data) => commit("setWeatherOneCall", data));
  },
};
