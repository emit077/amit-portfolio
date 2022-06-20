<template>
  <div class="py-15">
    <div class="text-center py-6 mb-10">
      <span>What I will do for you</span>
      <h1 class="card-title">{{ card_title }}</h1>
      <header-under-line :w1="90" :w2="5" :w3="30" />
    </div>
    <v-row class="mb-6" justify="center">
      <v-col
        cols="12"
        md="6"
        v-for="(service, i) in poject_list_data"
        :key="i"
        class="mb-12"
      >
        <v-card
          class="bg-white service-card mt-5 px-4 pb-4 h-100 text-center"
          outline
          elevation="5"
        >
          <div
            :class="$vuetify.display.mobile ? 'text-center' : 'text-left ml-3'"
          >
            <v-avatar :color="service.bg_color" size="90" class="mt-n11">
              <v-icon color="#000" size="45">{{ service.icon }}</v-icon>
            </v-avatar>
          </div>
          <h2 :class="$vuetify.display.mobile ? ' mt-3' : 'mt-n5'">
            {{ service.title }}
          </h2>
          <p class="mt-3">{{ service.description }}</p>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<style lang="scss" scoped>
.service-card {
  border-radius: 20px;
}
</style>
<script>
import HeaderUnderLine from "@/components/helper-components/HeaderUnderLine.vue";
// import CardGrid from "@/components/project-card-template/CardGrid.vue";

export default {
  components: { HeaderUnderLine },
  name: "MyWork",
  data: () => ({
    card_title: "Services",
    poject_list_data: [
      {
        title: "Web Development",
        bg_color: "#FFEE58",
        icon: "mdi-code-tags",
        description:
          "Creating beautiful websites your users will love. A responsive design makes your website accessible to all users, regardless of their device.",
        image: require("@/assets/images/projects/cashpo.png"),
        working_link: "https://cashpo.in",
        tech_stack: ["Django", "python", "Vuejs", "Vuetify", "HTML", "SCSS"],
      },
      {
        title: "Back-end Development",
        bg_color: "#69F0AE",
        icon: "mdi-tools",
        description:
          "Optemized, Moduller and Robust Backend that can be scalable easily. customizable Rest APIs with optimised response time and desired access management.",
        image: require("@/assets/images/projects/medx.png"),
        working_link: "https://themedx.in",
        tech_stack: ["Django", "python", "Vuejs", "Vuetify", "HTML", "CSS"],
      },
      {
        title: "e-Commerce",
        bg_color: "#FF4081",
        icon: "mdi-cart-variant",
        description:
          "Integration of e-Commerce platforms, payment gateways, custom product templates, and more.",
      },
    ],

    //
  }),
  methods: {
    //
  },
};
</script>
