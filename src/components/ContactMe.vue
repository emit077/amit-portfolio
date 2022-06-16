<template>
  <div class="mb-15">
    <div class="text-center mb-6">
      <span> What Next?</span>
      <h1 class="card-title">{{ card_title }}</h1>
      <header-under-line />
    </div>
    <div v-if="$vuetify.display.mobile" class="mobile-view">
      <div class="container-card mb-15" style="height: 250px">
        <v-hover v-slot="{ props }">
          <div
            class="mx-auto pro_img_container h-100"
            color="grey-lighten-4"
            v-bind="props"
          >
            <div class="h-100 d-grid-style">
              <p class="name_style text-center">CONTACT</p>
              <!-- <v-img cover :src="project.image" class="" width="100%"> -->
              <v-expand-transition>
                <div
                  class="d-flex transition-fast-in-fast-out v-card--reveal pa-3 font-bold about-text-aa bg-bgtext"
                  style="height: 250px"
                >
                  <p class="text-center">
                    Want to hire me? <br />
                    New project or opportunity?<br />
                    Got something you'd like to ask? Or just want to say
                    Hey!?<br />
                    Just Ping me! I’ll try my best to get back to you!
                    <br />
                    <br />
                    Alternatively, shoot me an email at.
                    <a href="mailto:emitsahu077@gmail.com"
                      >emitsahu077@gmail.com</a
                    >
                  </p>
                </div>
              </v-expand-transition>
              <!-- </v-img> -->
            </div>
          </div>
        </v-hover>
      </div>
    </div>
    <div v-else>
      <div class="container-card mb-15">
        <div>
          <v-hover v-slot="{ props }">
            <div
              class="mx-auto pro_img_container"
              color="grey-lighten-4"
              v-bind="props"
            >
              <div>
                <p class="name_style text-center">CONTACT</p>
                <!-- <v-img cover :src="project.image" class="" width="100%"> -->
                <v-expand-transition>
                  <div
                    class="d-flex transition-fast-in-fast-out v-card--reveal pa-3 font-bold about-text-aa bg-bgtext"
                    style="height: 100%"
                  >
                    <p class="text-center">
                      Want to hire me? <br />
                      New project or opportunity?<br />
                      Got something you'd like to ask? Or just want to say
                      Hey!?<br />
                      Just Ping me! I’ll try my best to get back to you!
                      <br />
                      <br />
                      Alternatively, shoot me an email at.
                      <a href="mailto:emitsahu077@gmail.com"
                        >emitsahu077@gmail.com</a
                      >
                    </p>
                  </div>
                </v-expand-transition>
                <!-- </v-img> -->
              </div>
            </div>
          </v-hover>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.name_style {
  font-size: 15rem;
  font-weight: bolder;
  opacity: 0.1;
}
.about-text-aa {
  font-size: 18px;
  // font-weight: bold;
}
.container-card {
  position: relative;
  background-color: transparent;
}
.v-card--reveal {
  align-items: center;
  top: 0;
  justify-content: center;
  opacity: 0.8;
  position: absolute;
  width: 100%;
  background-color: transparent !important;
}
.mobile-view {
  .name_style {
    font-size: 4.5rem;
    font-weight: bolder;
    opacity: 0.1;
  }
  .d-grid-style {
    display: grid;
    align-items: center;
  }
  .about-text-aa {
    font-size: 16px;
    text-align: justify;
  }
  .container-card {
    position: relative;
    background-color: transparent;
  }
  .v-card--reveal {
    align-items: center;
    top: 0;
    justify-content: center;
    opacity: 0.8;
    position: absolute;
    width: 100%;
    background-color: transparent !important;
  }
}
</style>
<script>
import HeaderUnderLine from "@/components/helper-components/HeaderUnderLine.vue";
export default {
  name: "ContactMe",
  components: {
    HeaderUnderLine,
  },
  data: () => ({
    card_title: "Get In Touch",
  }),
  methods: {},
};
</script>
