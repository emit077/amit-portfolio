<template>
  <app-bar></app-bar>
  <!-- Sizes your content based upon application components -->
  <v-main color="background" class="custom-class">
    <!-- Provides the application the proper gutter -->
    <v-container class="overflow-hidden">
      <div :class="$vuetify.display.mobile ? '' : 'px-15'">
        <landing-screen></landing-screen>
        <div v-for="(comp, i) in components_list" :key="i">
          <div :class="i == 0 ? 'mb-15' : 'my-15'">
            <div
              class="text-center pb-6 mb-10"
              data-aos="zoom-in"
              data-aos-duration="500"
            >
              <span v-if="comp.card_subtitle">{{ comp.card_subtitle }}</span>
              <h1 v-if="comp.card_title" class="card-title">
                {{ comp.card_title }}
              </h1>
              <header-under-line
                v-if="comp.line_width"
                :w1="comp.line_width[0]"
                :w2="comp.line_width[1]"
                :w3="comp.line_width[2]"
                data-aos="slide-left"
                data-aos-easing="linear"
                data-aos-duration="500"
              />
            </div>
            <component :is="comp.component_name"></component>
          </div>
          <v-divider></v-divider>
        </div>
      </div>
      <social-profile />
    </v-container>
  </v-main>
  <footer-vue />
</template>
<style lang="scss">
.custom-class {
  // background: linear-gradient(to bottom, #70e1f5, #ffd194);
  // background-image: linear-gradient(
  //   to left top,
  //   #d16ba5,
  //   #c777b9,
  //   #ba83ca,
  //   #aa8fd8,
  //   #9a9ae1,
  //   #8aa7ec,
  //   #79b3f4,
  //   #69bff8,
  //   #52cffe,
  //   #41dfff,
  //   #46eefa,
  //   #5ffbf1
  // );
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
import HeaderUnderLine from "@/components/helper-components/HeaderUnderLine.vue";
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
    HeaderUnderLine,
  },
  data: () => ({
    components_list: [
      {
        component_name: "about-me",
        line_width: [130, 20, 5],
        card_title: "About me",
        card_subtitle: "Let me tell you",
      },
      {
        component_name: "my-service",
        line_width: [90, 5, 30],
        card_title: "Services",
        card_subtitle: "What I will do for you",
      },
      {
        component_name: "my-work",
        line_width: [90, 5, 30],
        card_title: "Projects",
        card_subtitle: "Some of my recent",
      },
      {
        component_name: "experiance-vue",
        line_width: [190, 5, 60],
        card_title: "Where I’ve Worked",
        card_subtitle: "",
      },
      {
        component_name: "contact-me",
        line_width: [130, 20, 5],
        card_title: "Get In Touch",
        card_subtitle: "What Next?",
      },
    ],
    //
  }),
});
</script>
