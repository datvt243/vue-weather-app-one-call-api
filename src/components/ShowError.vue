<template lang="pug">
  .clearfix(v-if="show && getError.err")
    .mb-4
      .error
        .row.align-items-center
          .col
            small Không tìm thấy. Không có kết quả cho "{{ getError.value }}"
          .col-auto
            //- .delete.trans(@click="showError")
            //-   font-awesome-icon(:icon="getIconDelete")
</template>

<script>
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      show: true,
    };
  },
  computed: {
    ...mapGetters(["getError", "getQuery"]),
    getIconDelete() {
      return faTimes;
    },
  },
  methods: {
    showError() {
      this.show = false;
    },
  },
};
</script>

<style lang="sass" scoped>
.error
  color: #fff
  background-color: rgba(255, 0, 0, .2)
  padding: 5px 10px
  border-radius: 6px
.delete
  cursor: pointer
</style>
