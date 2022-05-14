<template>
  <v-app-bar app elevation="0" fixed color="background">
    <v-spacer></v-spacer>
    <v-btn icon @click="toggleThemeColor">
      <v-icon color="lightbulb"> mdi-lightbulb-on</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "AppBar",
  data: () => ({
    //
  }),
  computed: mapGetters({
    active_theme: "getActiveTheme",
  }),
  methods: {
    ...mapActions(["setActiveTheme"]),
    toggleThemeColor: function () {
      this.setActiveTheme(
        this.active_theme == "theme_dark" ? "theme_light" : "theme_dark"
      );
    },
  },
};
</script>
