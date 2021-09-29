<template lang="pug">
  transition(name="transition-dropdown" tag="div" class="mb-4")
    .weather-current(v-if="getWeatherCurrent")
      .box
        p.heading Thời tiết hiện tại [{{ getDate }}]
        .row.align-items-center.mb-4.mb-sm-0
          .col-auto
            .d-flex.align-items-center
              .column(v-if="getIcon")
                img(:src="getIcon")
              .column
                p.temp.mb-0 {{ Math.round(getTemp) }}&deg;
          .col-auto
            .px-0.p-sm-3
              p.mb-0
                span.feed-like Cảm thấy như {{ Math.round(getFeelsLike) }}&deg;. 
                span.description Có <i>{{ getDescription }}</i>
              p.mb-0 Nhiệt độ thấp nhất là {{ Math.round(getTempMin) }}&deg;.
        hr.mt-0.line
        .row
          .col-6.col-sm.my-2
            p.mb-0.title Tốc độ gió
            p.mb-0 {{ getWindSpeed }} (m/s)
          .col-6.col-sm.my-2
            p.mb-0.title Độ ẩm
            p.mb-0 {{ getHumidity }} (%)
          .col-6.col-sm.my-2
            p.mb-0.title Tầm nhìn
            p.mb-0 {{ getVisibility }} (m)
          .col-6.col-sm.my-2
            p.mb-0.title Có mây
            p.mb-0 {{ getClouds }} (%)
          .col-12.col-sm-auto.my-2
            p.mb-0 
              small Mặt trời mọc: {{ getSunrise }} 
            p.mb-0 
              small Mặt trời lặn: {{ getSunset }} 
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getWeatherCurrent"]),
    getTemp() {
      return this.getWeatherCurrent ? this.getWeatherCurrent.main.temp : "";
    },
    getDescription() {
      return this.getWeatherCurrent
        ? this.getWeatherCurrent.weather[0].description
        : "";
    },
    getIcon() {
      let icon = this.getWeatherCurrent
        ? this.getWeatherCurrent.weather[0].icon
        : "";
      return `http://openweathermap.org/img/wn/${icon}@2x.png`;
    },
    getFeelsLike() {
      return this.getWeatherCurrent
        ? this.getWeatherCurrent.main.feels_like
        : "";
    },
    getTempMin() {
      return this.getWeatherCurrent ? this.getWeatherCurrent.main.temp_min : "";
    },
    getWindSpeed() {
      return this.getWeatherCurrent ? this.getWeatherCurrent.wind.speed : "";
    },
    getHumidity() {
      return this.getWeatherCurrent ? this.getWeatherCurrent.main.humidity : "";
    },
    getVisibility() {
      return this.getWeatherCurrent ? this.getWeatherCurrent.visibility : "";
    },
    getClouds() {
      return this.getWeatherCurrent ? this.getWeatherCurrent.clouds.all : "";
    },
    getSunrise() {
      let time = this.getWeatherCurrent
        ? this.getWeatherCurrent.sys.sunrise
        : "";
      return this.formatTime(time);
    },
    getSunset() {
      let time = this.getWeatherCurrent
        ? this.getWeatherCurrent.sys.sunset
        : "";
      return this.formatTime(time);
    },
    getDate() {
      let dt = this.getWeatherCurrent ? this.getWeatherCurrent.dt : "";
      let d = new Date(dt * 1000);
      let month = d.getMonth() + 1 + "";
      let day = d.getDate() + "";
      let year = d.getFullYear() + "";
      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      return `${day}/${month}/${year}`;
    },
  },
  methods: {
    formatDate(time) {
      let d = new Date(time * 1000);
      let month = d.getMonth() + 1 + "";
      let day = d.getDate() + "";
      let year = d.getFullYear() + "";
      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;
      return `${day}/${month}/${year} `;
    },
    formatTime(time) {
      let d = new Date(time * 1000);
      let hours = d.getHours() + "";
      let minutes = d.getMinutes() + "";
      let seconds = d.getSeconds() + "";
      if (hours.length < 2) hours = "0" + hours;
      if (minutes.length < 2) minutes = "0" + minutes;
      if (seconds.length < 2) seconds = "0" + seconds;
      return `${hours}:${minutes}:${seconds}`;
    },
  },
};
</script>

<style lang="sass" scoped>
.weather-current
  position: relative
.box
  padding: 20px
  border:
    radius: 10px
  background:
    color: rgba(34, 38, 42, .6)
  margin-bottom: 10px
.heading, .title
  text-transform: uppercase
  font:
    size: 16px
    weight: 700
  letter-spacing: .05em
  margin-bottom: 0
.heading
  font-size: 20px
.temp
  font-size: 50px
  margin: 0
.line
  opacity: .1
</style>
