<template lang="pug">
  .location
    .row.align-items-end
      .col
        h2.heading.mb-0
          small
            font-awesome-icon(:icon="faHome")
          span.ms-3 {{ getLocationName }}, {{ getLocationCountry }}
      .col-auto
        Clock
</template>

<script>
import { faHome } from "@fortawesome/free-solid-svg-icons";
import Clock from "@/components/Clock";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getWeatherCurrent"]),
    getLocationName() {
      return this.getWeatherCurrent ? this.getWeatherCurrent.name : "";
    },
    getLocationCountry() {
      return this.getWeatherCurrent && this.getWeatherCurrent.sys
        ? this.getWeatherCurrent.sys.country
        : "";
    },
    faHome() {
      return faHome;
    },
  },
  components: {
    Clock,
  },
};
</script>

<style lang="sass" scoped>
.location
  margin-bottom: 1.5rem
.heading
  font-weight: 700
</style>
