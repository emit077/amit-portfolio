<template>
  <app-bar></app-bar>
  <!-- Sizes your content based upon application components -->
  <v-main color="background" class="custom-class">
    <!-- Provides the application the proper gutter -->
    <v-container>
      <div :class="$vuetify.display.mobile ? '' : 'px-15'">
        <landing-screen />
        <about-me />
        <my-service />
        <v-divider></v-divider>
        <my-work />
        <v-divider></v-divider>
        <experiance-vue />
        <v-divider></v-divider>
        <contact-me />
      </div>
      <social-profile />

      <!-- <experiance-vue /> -->
      <!-- <test-vue /> -->
      <!-- If using vue-router -->
      <!--      <router-view></router-view>-->
    </v-container>
  </v-main>
  <footer-vue />
</template>
<style lang="scss">
.custom-class {
  // background: linear-gradient(to bottom, #70e1f5, #ffd194);
  background-image: linear-gradient(
    to left top,
    #d16ba5,
    #c777b9,
    #ba83ca,
    #aa8fd8,
    #9a9ae1,
    #8aa7ec,
    #79b3f4,
    #69bff8,
    #52cffe,
    #41dfff,
    #46eefa,
    #5ffbf1
  );
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
import MyService from "@/components/MyService.vue";
import FooterVue from "@/components/Footer.vue";
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
    MyService,
    FooterVue,
    // TestVue,
  },
});
</script>
