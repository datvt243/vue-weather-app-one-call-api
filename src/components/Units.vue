<template lang="pug">
  .units
    .btn-group
      a.btn(href="#" :class="[getUnits === 'metric' ? 'is-active' : '']" @click="fetchDataByUnit('metric')") &deg;C
      a.btn(href="#" :class="[getUnits === 'imperial' ? 'is-active' : '']" @click="fetchDataByUnit('imperial')") &deg;F
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
export default {
  computed: {
    ...mapGetters(["getUnits", "getLon", "getLat"]),
  },
  methods: {
    ...mapMutations(["setUnits"]),
    fetchDataByUnit(value) {
      this.setUnits(value);
      let lat = this.getLat;
      let lon = this.getLon;
      this.$store.dispatch("fetchDataWeather", { lat, lon });
    },
  },
};
</script>

<style lang="sass" scoped>
.btn-group
  overflow: hidden
  border: 1px solid #333
    radius: 10px
.btn
  padding: 2px 10px
  border:
    radius: 0
  opacity: .6
  &.is-active
    background-color: #333
    opacity: 1
</style>
