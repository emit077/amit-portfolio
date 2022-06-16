<template>
  <app-bar></app-bar>
  <v-main color="background" class="h-100">
    <v-container class="h-100">
      <div :class="$vuetify.display.mobile ? '' : 'px-15'">
        <router-view />
      </div>
    </v-container>
  </v-main>
</template>
<style lang="scss"></style>
<script>
import { defineComponent } from "vue";
import AppBar from "@/components/AppBar.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    AppBar,
  },
});
</script>
