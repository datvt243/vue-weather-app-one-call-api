<template lang="pug">
  #app.overflow
    Default
      Navbar
      WeatherContainer
      .clearfix(v-if="!getWeatherCurrent && !getWeatherOneCall")
        .container.py-4
          p Hãy nhập địa điểm bạn muốn vào ô tìm kiếm.
</template>

<script>
import Default from "./layouts/Default.vue";
import Navbar from "./parts/Navbar.vue";
import WeatherContainer from "./parts/WeatherContainer.vue";

import { mapGetters } from "vuex";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    Default,
    Navbar,
    WeatherContainer,
  },
  created() {
    let lon;
    let lat;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        lon = position.coords.longitude;
        lat = position.coords.latitude;
        await this.$store.dispatch("fetchDataWeather", { lat, lon });
      });
    }
  },
  computed: {
    ...mapGetters(["getWeatherCurrent", "getWeatherOneCall"]),
  },
};
</script>

<style lang="sass" scoped>
.overflow
  overflow: hidden
</style>
