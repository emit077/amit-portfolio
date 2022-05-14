<template>
  <v-app :theme="active_theme">
    <!--    <v-main>-->
    <router-view />
    <!--    </v-main>-->
  </v-app>
</template>
<style lang="scss">
@import url("@/assets/css/custom-animation.scss");
// html,
// body {
//   height: 100%;
//   margin: 0;
// }
</style>

<script>
import { mapGetters } from "vuex";

export default {
  name: "App",

  data: () => ({
    //
  }),
  computed: mapGetters({
    active_theme: "getActiveTheme",
  }),
};
</script>
