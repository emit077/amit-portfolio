<template>
  <v-app :theme="active_theme">
    <!--    <v-main>-->
    <router-view />
    <!--    </v-main>-->

    <theme-loader />
  </v-app>
</template>

<style lang="scss">
@import url("@/assets/css/custom-animation.scss");
@import url("@/assets/css/style.scss");
</style>

<script>
import { mapGetters } from "vuex";
import ThemeLoader from "./components/helper-components/ThemeLoader.vue";

export default {
  name: "App",
  components: { ThemeLoader },
  data: () => ({
    //
  }),
  computed: mapGetters({
    active_theme: "getActiveTheme",
  }),
};
</script>
