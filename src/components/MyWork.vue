<template>
  <div v-for="(project, i) in poject_list_data" :key="i">
    <div class="left-project-grid mb-15" v-if="(i + 1) % 2 == 0">
      <div class="__content">
        <h2 class="__title">{{ project.title }}</h2>
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            class="__description_box pa-3"
            :elevation="isHovering ? 4 : 2"
            v-bind="props"
          >
            {{ project.description }}
          </v-card>
        </v-hover>
        <div class="mt-3">
          <span class="pr-2" v-for="(tech, j) in project.tech_stack" :key="j"
            >#{{ tech }}</span
          >
        </div>
        <div class="mt-3" v-if="project.working_link">
          <a
            :href="project.working_link"
            class="__external_links"
            target="_blank"
          >
            <external-link-btn />
          </a>
        </div>
      </div>
      <div class="__img">
        <v-hover v-slot="{ isHovering, props }">
          <div
            class="mx-auto pro_img_container"
            color="grey-lighten-4"
            v-bind="props"
          >
            <v-img cover :src="project.image" class="" width="100%">
              <v-expand-transition>
                <div
                  v-if="!isHovering"
                  class="d-flex transition-fast-in-fast-out v-card--reveal text-h2 text-white"
                  style="height: 100%"
                >
                  {{ project.title }}
                </div>
              </v-expand-transition>
            </v-img>
          </div>
        </v-hover>
      </div>
    </div>
    <div v-else class="right-project-grid mb-15">
      <div class="__img">
        <v-hover v-slot="{ isHovering, props }">
          <div class="mx-auto" color="grey-lighten-4" v-bind="props">
            <v-img cover :src="project.image" width="100%">
              <v-expand-transition>
                <div
                  v-if="!isHovering"
                  class="d-flex transition-fast-in-fast-out v-card--reveal text-h2 text-white"
                  style="height: 100%"
                >
                  {{ project.title }}
                </div>
              </v-expand-transition>
            </v-img>
          </div>
        </v-hover>
      </div>
      <div class="__content">
        <h2 class="__title text-right">{{ project.title }}</h2>
        <v-hover v-slot="{ isHovering, props }">
          <v-card
            class="__description_box pa-3"
            :elevation="isHovering ? 4 : 2"
            v-bind="props"
          >
            {{ project.description }}
          </v-card>
        </v-hover>
        <div class="mt-3 text-right">
          <span class="pr-2" v-for="(tech, j) in project.tech_stack" :key="j"
            >#{{ tech }}</span
          >
        </div>
        <div class="mt-3 text-right" v-if="project.working_link">
          <a
            :href="project.working_link"
            class="__external_links"
            target="_blank"
          >
            <external-link-btn />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.project-list {
  list-style: none;
}
.left-project-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  -moz-box-align: center;
  align-items: center;
  gap: 10px;
  background-color: transparent;

  .__content {
    position: relative;
    grid-area: 1 / 1 / -1 / 7;
    z-index: 1;
  }
  .__img {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    grid-area: 1 / 6 / -1 / -1;
    position: relative;
  }

  @media screen and (max-width: 900px) {
    .__content {
      grid-column: 1/-1;
      opacity: 0.4;
    }
    .__description_box {
      background-color: transparent;
    }
    .__img {
      grid-column: 1/-1;
      background-image: url(../assets/images/projects/ip.png);
      background-position: top center;
      background-size: cover;
      .pro_img_container {
        display: none;
      }
    }
  }
}

.right-project-grid {
  position: relative;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  -moz-box-align: center;
  align-items: center;
  gap: 10px;
  background-color: transparent;

  .__img {
    position: relative;
    grid-area: 1 / 6 / -1 / -1;
    grid-column: 1 / 8;
    // grid-area: 1 / 1 / -1 / 7;
  }
  .__content {
    box-shadow: 0 10px 30px -15px var(--navy-shadow);
    transition: var(--transition);
    grid-area: 1 / 1 / -1 / 7;
    grid-column: 7 / -1;
    position: relative;
    z-index: 1;
  }

  @media screen and (max-width: 900px) {
    .__content {
      grid-column: 1/-1;
      opacity: 0.4;
    }
    .__img {
      grid-column: 1/-1;
    }
  }
}

.v-card--reveal {
  align-items: center;
  top: 0;
  justify-content: center;
  opacity: 0.6;
  position: absolute;
  width: 100%;
  background-color: #000;
}
.__external-link {
  fill: none;
  height: 25px;
  cursor: pointer;
}
.__external-link:hover {
  color: yellow;
}
.__external_links {
  text-decoration: none !important;
}
</style>
<script>
import ExternalLinkBtn from "./helper-components/ExternalLinkBtn.vue";
export default {
  components: { ExternalLinkBtn },
  name: "MyWork",
  data: () => ({
    project_image: require("@/assets/images/projects/ip.png"),
    poject_list_data: [
      {
        title: "Medx",
        description: "Invitation Panda",
        image: require("@/assets/images/projects/medx.png"),
        working_link: "https://themedx.in",
        tech_stack: ["Django", "python", "Vuejs", "Vuetify", "HTML", "CSS"],
      },
      {
        title: "Cashpo",
        description: "Cashpo",
        image: require("@/assets/images/projects/cashpo.png"),
        working_link: "https://cashpo.in",
        tech_stack: ["Django", "python", "Vuejs", "Vuetify", "HTML", "SCSS"],
      },
      {
        title: "Tutors Factory",
        description: "Tutors Factory",
        image: require("@/assets/images/projects/tf.png"),
        working_link: "https://www.tutorsfactory.com",
        tech_stack: ["Django", "python", "Vuejs", "Vuetify", "HTML", "SCSS"],
      },
      {
        title: "Invitation Panda",
        description: "Invitation Panda",
        image: require("@/assets/images/projects/ip.png"),
        working_link: "https://invitationpanda.com",
        gitnub_link: "https://invitationpanda.com",
        tech_stack: ["Vuejs", "Vuetify", "HTML", "CSS"],
      },
      {
        title: "BurnBlack",
        description: "BurnBlack",
        image: require("@/assets/images/projects/burnblack.png"),
        working_link: "https://burnblack.in/",
        tech_stack: ["Django", "python", "Vuejs", "Vuetify", "HTML", "SCSS"],
      },
      {
        title: "Rawfit",
        description: "Rawfit",
        image: require("@/assets/images/projects/rawfit.png"),
        working_link: "https://rawfit.in",
        tech_stack: ["Django", "python", "Vuejs", "HTML", "SCSS"],
      },
      {
        title: "GimBooks",
        description: "GimBooks",
        image: require("@/assets/images/projects/gim.png"),
        working_link: "https://www.gimbooks.com/",
        tech_stack: ["Django", "python", "JavaScript", "HTML", "CSS"],
      },
    ],

    //
  }),
  methods: {
    //
  },
};
</script>
