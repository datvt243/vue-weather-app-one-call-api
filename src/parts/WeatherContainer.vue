<template lang="pug">
  .weather-container.py-4
    .container
      ShowError
      Location
      .mb-4
        CurrentWeather
      DailyWeather
</template>

<script>
import Location from "@/components/Location";
import CurrentWeather from "@/components/CurrentWeather";
import ShowError from "@/components/ShowError.vue";
import DailyWeather from "@/components/DailyWeather.vue";

import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    Location,
    CurrentWeather,
    ShowError,
    DailyWeather,
  },
  computed: {
    ...mapGetters(["getWeatherCurrent", "getWeatherOneCall"]),
  },
};
</script>
