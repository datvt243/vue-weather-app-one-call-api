<template lang="pug">
  .weather-header.bg-dark.py-2
    .container
      .row.align-items-center.justify-content-between
        .col-auto
          FormSearch
        .col.col-center.d-none.d-md-block
          TagsLocation
        .col-auto
          Units
</template>

<script>
import FormSearch from "@/components/FormSearch";
import Units from "@/components/Units";
import TagsLocation from "@/components/TagsLocation";
export default {
  components: {
    FormSearch,
    Units,
    TagsLocation,
  },
};
</script>

<style lang="sass" scoped>
.col-center
  width: 1%
</style>
