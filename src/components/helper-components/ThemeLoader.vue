<style lang="scss">
.style-theme-loader .v-overlay__scrim {
  opacity: 1 !important;
}
.fc-white {
  color: #fff;
}
.fc-black {
  color: black;
}
.d-grid {
  display: grid;
  align-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
}
.v-overlay__content {
  height: 100%;
  width: 100%;
}
.turn-off {
  color: #fff;
  -webkit-transition: color 1000ms linear;
  -moz-transition: color 1000ms linear;
  -o-transition: color 1000ms linear;
  -ms-transition: color 1000ms linear;
  transition: color 1000ms linear;
  -webkit-animation: light_off 3s infinite linear;
}
.turn-on {
  color: #000;
  -webkit-transition: color 1000ms linear;
  -moz-transition: color 1000ms linear;
  -o-transition: color 1000ms linear;
  -ms-transition: color 1000ms linear;
  transition: color 1000ms linear;
  -webkit-animation: light_on 3s infinite linear;
}
</style>

<template>
  <div class="text-center">
    <v-overlay
      v-model="$store.state.theme_loader"
      fixed
      persistent
      :theme="active_theme == 'theme_dark' ? 'theme_light' : 'theme_dark'"
      class="style-theme-loader"
    >
      <div class="d-grid text-center">
        <div v-if="active_theme == 'theme_dark'">
          <div class="mb-5">
            <v-icon class="turn-off" size="150"> mdi-lightbulb-on</v-icon>
          </div>
          <h3 class="fc-black">Switching off the lights...</h3>
          <!-- <h3 v-else class="fc-white">Switching on the lights...</h3> -->
        </div>
        <div v-else>
          <div class="mb-5">
            <v-icon class="turn-on" size="150"> mdi-lightbulb-on</v-icon>
          </div>
          <h3 class="fc-white">Switching on the lights...</h3>
        </div>
      </div>
    </v-overlay>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ThemeLoader",
  data: () => ({
    //
  }),
  computed: mapGetters({
    active_theme: "getActiveTheme",
  }),
};
</script>
