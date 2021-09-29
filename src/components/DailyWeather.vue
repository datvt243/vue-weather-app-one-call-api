<template lang="pug">
  transition(name="transition-dropdown")
    .daily-weather(v-if="getDaily")
      hr
      .mb-4
        h3.heading
          font-awesome-icon(:icon="faCloud")
          span.ms-3 Dự báo 8 ngày tới
      .clearfix.slick-wrapper.mx-2
        VueSlickCarousel(ref="c1" :asNavFor="$refs.c2" :focusOnSelect="true" :slidesToShow="4" :responsive="responsive")
          div.px-2(v-for="slider in getDaily" :key="+slider.dt")
            .slick-slide-item
              p.mb-0.ps-2 {{ getDate(slider.dt) }}
              .d-flex.align-items-center
                .col-auto
                  img(:src="getIcon(slider.weather[0].icon)" width="80")
                .col.ps-2
                  p.mb-0 
                    strong.temp-max {{ Math.round(slider.temp.max) }}&deg; / 
                    span.temp-min {{ Math.round(slider.temp.min) }}&deg;
                  p.mb-0 Có {{ slider.weather[0].description }}
        VueSlickCarousel(ref="c2" :asNavFor="$refs.c1" :focusOnSelect="true" :arrows="false")
          div.px-2.mt-2(v-for="slider in getDaily" :key="+slider.dt")
            .clearfix.box
              .header.row.align-items-center
                .col
                  .row.align-items-center.w-100
                    .col-12.col-sm-auto
                      p.mb-0.text-center.text-sm-left
                        img(:src="getIcon4x(slider.weather[0].icon)" alt="")
                    .col-12.col-sm
                      .row.align-items-center
                        .col-12.col-sm.my-2
                          p.mb-2 {{ getDate(slider.dt) }}
                          p.mb-0 
                            strong.fnt2x Có {{ slider.weather[0].description }}
                          p.mb-0 Nhiệt độ cao nhất {{ Math.round(slider.temp.max) }}&deg;, Thấp nhất {{ Math.round(slider.temp.min) }}&deg;
                        .col-12.col-sm-auto.my-2
                          p.mb-0 Mặt trời mọc: {{ formatTime(slider.sunrise) }}
                          p.mb-0 Mặt trời lặn: {{ formatTime(slider.sunset) }}
              .row
                .col-12.col-sm-6.my-3.my-sm-0
                  .clearfix
                    .d-flex.flex-wrap
                      p.tag.me-4 Độ ẩm: {{ slider.humidity }}%
                      p.tag.me-4 Có mây: {{ slider.clouds }}%
                      p.tag.me-4 Chỉ số UV: {{ slider.clouds }}%
                      p.tag.me-4 Khối lượng mưa: {{ slider.uvi }} mm
                      p.tag.me-4 Tốc độ gió: {{ slider.wind_speed }} m/s
                      p.tag.me-4 Áp suất khí quyển: {{ slider.pressure }} hPa
                      p.tag.me-4 Nhiệt độ khí quyển: {{ slider.dew_point }}&deg;
                .col-12.col-sm-6
                  .table-primary
                    table.table
                      thead
                        tr
                          th
                          th Sáng
                          th Trưa
                          th Chiều
                          th Tối
                      tbody
                        tr
                          td Nhiệt độ
                          td {{ Math.round(slider.temp.morn) }}&deg;
                          td {{ Math.round(slider.temp.day) }}&deg;
                          td {{ Math.round(slider.temp.eve) }}&deg;
                          td {{ Math.round(slider.temp.night) }}&deg;
                        tr
                          td Cảm thấy như
                          td {{ Math.round(slider.feels_like.morn) }}&deg;
                          td {{ Math.round(slider.feels_like.day) }}&deg;
                          td {{ Math.round(slider.feels_like.eve) }}&deg;
                          td {{ Math.round(slider.feels_like.night) }}&deg;
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import { mapGetters } from "vuex";
import { faCloud } from "@fortawesome/free-solid-svg-icons";
export default {
  data() {
    return {
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["getWeatherOneCall"]),
    getDaily() {
      return this.getWeatherOneCall ? this.getWeatherOneCall.daily : "";
    },
    faCloud() {
      return faCloud;
    },
  },
  methods: {
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
    formatDate(time) {
      let dayArr = [
        "Chủ nhật",
        "Thứ 2",
        "Thứ 3",
        "Thứ 4",
        "Thứ 5",
        "Thứ 6",
        "Thứ 7",
      ];
      let d = new Date(time * 1000);
      let day = d.getDay() + "";
      let date = d.getDate() + "";
      let month = d.getMonth() + 1 + "";
      if (date.length < 2) date = "0" + date;
      if (month.length < 2) month = "0" + month;
      return `${dayArr[day]}, Ngày ${date}/${month}`;
    },
    getDate(time) {
      return this.formatDate(time);
    },
    getIcon(icon = "10d") {
      return `http://openweathermap.org/img/wn/${icon}@2x.png`;
    },
    getIcon4x(icon = "10d") {
      return `http://openweathermap.org/img/wn/${icon}@4x.png`;
    },
  },
  components: {
    VueSlickCarousel,
  },
};
</script>

<style lang="sass" scoped>
.slick-slide
  padding: 0 10px
.slick-initialized
  .slick-slide
    &.slick-current
      .slick-slide-item
        background-color: rgba(255,255,255,.2)
.daily-weather
  position: relative
.slick-slide-item
  background-color: rgba(255,255,255,.1)
  padding: 10px
  border-radius: 6px
.temp-max
  font-size: 1.1em
img
  pointer-events: none

.box
  position: relative
  padding-left: 25px
  border-left: 1px solid #eb6e4b
  margin-top: 30px
  .header
    position: relative
    transform: translateY(-20px)
.tag
  background-color: rgba(255,255,255,.05)
  padding: 6px 12px
  border-radius: 4px
  line-height: 1
</style>
