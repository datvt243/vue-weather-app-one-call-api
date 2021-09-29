<template lang="pug">
  header.header-container
    .container.py-2
      .d-flex.align-items-center
        .column.pe-2
          img.avatar(:alt=title src="@/assets/logo.png")
        .column
          p.project {{ title }}
</template>

<script>
export default {
  data() {
    return {
      title: "[Vuejs] Weather App One Call Api",
    };
  },
};
</script>

<style lang="sass" scope>
.avatar
  width: 35px
.project
  font-weight: 700
  margin: 0
</style>
