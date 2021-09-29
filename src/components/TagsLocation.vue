<template lang="pug">
  .tags-location(v-if="getListSearch")
    .d-flex.flex-wrap.align-items-center
      .col-auto.pe-2
        small.tag
          a.link(href="#" @click="fetchDataByCurent")
            font-awesome-icon(:icon="faMapMarkerAlt")
      .col
        transition-group(name="transition-dropdown" tag="ul" class="list-tag")
          li.item(v-if="getListSearch" v-for="item in getListSearch" :key="item")
            small.tag
              a.link(href="#" @click="fetchDataByTag(item)").me-2 {{ item }}
              small.icon(@click.prevent="removeTag(item)")
                font-awesome-icon(:icon="faTimes")
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
export default {
  computed: {
    ...mapGetters(["getLat", "getLon", "getListSearch"]),
    faTimes() {
      return faTimes;
    },
    faMapMarkerAlt() {
      return faMapMarkerAlt;
    },
  },
  methods: {
    ...mapMutations(["setQuery", "removeTag"]),
    async fetchDataByCurent() {
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
    async fetchDataByTag(value) {
      this.setQuery(value);
      let lat = this.getLat;
      let lon = this.getLon;
      await this.$store.dispatch("fetchDataWeather", { lat, lon });
    },
  },
};
</script>

<style lang="sass" scoped>
.tags-location
  //overflow-x: auto
.list-tag
  display: flex
  list-style-type: none
  margin: 0
  padding: 0
  li
    padding: 5px
.tag
  padding: 5px 10px
  background-color: rgba(255,255,255,.1)
  border-radius: 8px
  white-space: nowrap
.link
  color: currentColor
  text-decoration: none
.icon
  cursor: pointer
  position: relative
  z-index: 10
.link, .icon
  transition: opacity .3s ease
  &:hover
    opacity: .6
</style>
