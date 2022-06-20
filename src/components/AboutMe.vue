<template>
  <div>
    <div v-if="$vuetify.display.mobile" class="mobile-view">
      <div class="container-card mb-15" style="height: 500px">
        <v-hover v-slot="{ props }">
          <div
            class="mx-auto pro_img_container h-100"
            color="grey-lighten-4"
            v-bind="props"
          >
            <div class="h-100 d-grid-style">
              <p class="name_style text-center">ABOUT</p>
              <!-- <v-img cover :src="project.image" class="" width="100%"> -->
              <v-expand-transition>
                <div
                  class="d-flex transition-fast-in-fast-out v-card--reveal pa-3 font-bold about-text-aa bg-bgtext"
                >
                  <p>
                    Hello! My name is Amit Kumar Sahu. I'm software developer
                    based in of Chhattisgarh India. I enjoy creating things that
                    live on the internet. My interest in fullstack development
                    started back in 2018 when I decided to try editing custom
                    themes and buid the website for collage event, Fast-forward
                    to today, and I’ve had the privilege of working at an a
                    start-up and a huge corporation.
                    <br />
                    <br />
                    Professionally connected with the web development industry
                    and information technology for many years. Interested in the
                    entire frontend spectrum and working on ambitious projects
                    with positive people.
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
                <p class="name_style text-center">ABOUT</p>
                <!-- <v-img cover :src="project.image" class="" width="100%"> -->
                <v-expand-transition>
                  <div
                    class="d-flex transition-fast-in-fast-out v-card--reveal pa-3 font-bold about-text-aa bg-bgtext"
                    style="height: 100%"
                  >
                    <p class="fw-400 text-opacity-7">
                      Hello! My name is Amit Kumar Sahu. I'm software developer
                      based in of Chhattisgarh India. I enjoy creating things
                      that live on the internet. My interest in fullstack
                      development started back in 2018 when I decided to try
                      editing custom themes and buid the website for collage
                      event, Fast-forward to today, and I’ve had the privilege
                      of working at an a start-up and a huge corporation.
                      <br />
                      <br />
                      Professionally connected with the web development industry
                      and information technology for many years. Interested in
                      the entire frontend spectrum and working on ambitious
                      projects with positive people.
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
  line-height: 90%;
}
.about-text-aa {
  font-size: 20px;
  text-align: justify;
  // opacity: 0.4;
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
    font-size: 6rem;
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
export default {
  name: "AboutMe",
  components: {},
  data: () => ({
    card_title: "About me",
  }),
  methods: {},
};
</script>
