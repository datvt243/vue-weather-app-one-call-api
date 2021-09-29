<template lang="pug">
  .page-container
    Header
    main.main-container
      slot
    Footer
</template>

<script>
import Header from "@/parts/Header";
import Footer from "@/parts/Footer";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped lang="sass">
.page-container
  display: flex
  flex-direction: column
  min-height: 100vh
.main-container
  flex-grow: 1
</style>
