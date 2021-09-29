<template lang="pug">
  .frm-search
    input.frm-control(type="text" name="search" placeholder="Nhập địa điểm ..." @keydown.enter="getData" v-model="getLocation")
    span.frm-icon
      a.btn.btn-search(@click="getData")
        font-awesome-icon(:icon="iconSearhPlus")
</template>

<script>
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";

import { mapGetters, mapMutations } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getQuery", "getLat", "getLon"]),
    iconSearhPlus: () => {
      return faSearchPlus;
    },
    getLocation: {
      get() {
        return this.getQuery;
      },
      set(value) {
        this.setQuery(value);
      },
    },
  },
  methods: {
    ...mapMutations(["setQuery", "setListSearch"]),
    async getData() {
      let lat = this.getLat;
      let lon = this.getLon;
      await this.$store.dispatch("fetchDataWeather", { lat, lon });
    },
  },
};
</script>

<style lang="sass" scope>
.btn
  text-decoration: none
  color: #fff
.frm
  &-search
    position: relative
    // overflow: hidden
  &-control
    color: #eee
    padding: 5px 15px
      right: 50px
    font-size: .9em
    border: 0
      radius: 999px
    background:
      color: rgba(255,255,255,.1)
  &-icon
      position: absolute
      z-index: 10
      right: 5px
      top: 50%
      transform: translateY(-50%)
</style>
