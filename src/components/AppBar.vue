<template>
  <v-app-bar app elevation="0" fixed color="transparent">
    <v-spacer></v-spacer>
    <v-btn icon @click="toggleThemeColor">
      <p
        :title="
          active_theme == 'theme_dark'
            ? 'Switch on lights'
            : 'Switch off lights'
        "
      >
        <!-- <v-icon color="lightbulb"> mdi-lightbulb-on</v-icon> -->
      </p>
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
      this.$store.state.theme_loader = true;
      setTimeout(() => {
        this.$store.state.theme_loader = false;
      }, 2700);
    },
  },
};
</script>
