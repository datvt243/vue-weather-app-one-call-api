<template lang="pug">
  .clock
    .d-flex.align-items-center
      span
        font-awesome-icon(:icon="faClock")
      span.ps-2 {{ times }}
</template>

<script>
import { faClock } from "@fortawesome/free-regular-svg-icons";
export default {
  data() {
    return {
      times: "",
    };
  },
  mounted() {
    this.createClock();
  },
  computed: {
    faClock() {
      return faClock;
    },
  },
  methods: {
    getTime() {
      let d = new Date();
      let hours = d.getHours() + "";
      let minutes = d.getMinutes() + "";
      let seconds = d.getSeconds() + "";
      if (hours.length < 2) hours = "0" + hours;
      if (minutes.length < 2) minutes = "0" + minutes;
      if (seconds.length < 2) seconds = "0" + seconds;
      return `${hours}:${minutes}:${seconds}`;
    },
    createClock() {
      setInterval(() => {
        this.times = this.getTime();
      }, 1000);
    },
  },
};
</script>

<style lang="sass" scoped>
.clock
  font:
    size: 20px
    weight: 400
</style>
