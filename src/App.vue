<template lang="pug">
  #app.overflow
    Default
      Navbar
      WeatherContainer
</template>

<script>
import Default from "./layouts/Default.vue";
import Navbar from "./parts/Navbar.vue";
import WeatherContainer from "./parts/WeatherContainer.vue";

export default {
  name: "App",
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
};
</script>

<style lang="sass" scoped>
.overflow
  overflow: hidden
</style>
