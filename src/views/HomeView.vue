<template>
  <app-bar></app-bar>
  <!-- Sizes your content based upon application components -->
  <v-main color="background" class="h-100">
    <!-- Provides the application the proper gutter -->
    <v-container class="h-100">
      <div :class="$vuetify.display.mobile ? '' : 'px-15'">
        <landing-screen />
        <about-me />
        <my-work />
        <experiance-vue />

        <contact-me />
      </div>
      <social-profile />

      <!-- <experiance-vue /> -->
      <!-- <test-vue /> -->
      <!-- If using vue-router -->
      <!--      <router-view></router-view>-->
    </v-container>
  </v-main>
</template>
<style lang="scss">
.custom-class {
  background: rgb(var(--v-theme-background));
  color: rgba(var(--v-theme-on-background), 0.6) !important;
}
.card-title {
  line-height: 95%;
}
</style>
<script>
import { defineComponent } from "vue";
import AppBar from "@/components/AppBar.vue";
import LandingScreen from "@/components/LandingScreen.vue";
import ContactMe from "@/components/ContactMe.vue";
import MyWork from "@/components/MyWork.vue";
import AboutMe from "@/components/AboutMe.vue";
import SocialProfile from "@/components/SocialProfile.vue";
import ExperianceVue from "@/components/Experiance.vue";
// import TestVue from "@/components/Test.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    AppBar,
    LandingScreen,
    AboutMe,
    ContactMe,
    MyWork,
    SocialProfile,
    ExperianceVue,
    // TestVue,
  },
});
</script>
