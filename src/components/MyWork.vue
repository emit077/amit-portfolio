<template>
  <div class="my-15">
    <div class="text-center pb-6">
      <span>Some of my recent</span>
      <h1 class="card-title">{{ card_title }}</h1>
      <header-under-line :w1="90" :w2="5" :w3="30" />
    </div>

    <div v-if="$vuetify.display.mobile" class="mobile-view">
      <v-card
        class="mx-auto bg-bgtext mt-6"
        v-for="(project, i) in poject_list_data"
        :key="i"
      >
        <v-img
          class="align-end text-white"
          height="200"
          :src="project.image"
          cover
        >
        </v-img>
        <div class="px-2"><v-divider></v-divider></div>
        <v-card-text class="bg-bgtext">
          <div class="text-right float-right pr-2" v-if="project.working_link">
            <a
              :href="project.working_link"
              class="__external_links"
              target="_blank"
            >
              <external-link-btn />
            </a>
          </div>
          <v-card-title class="py-0 px-0">{{ project.title }}</v-card-title>

          <p>{{ project.description }}</p>
          <div class="mt-2 text-right">
            <small
              class="pr-2 text-opacity-8"
              v-for="(tech, j) in project.tech_stack"
              :key="j"
              >#{{ tech }}</small
            >
          </div>
        </v-card-text>
      </v-card>
    </div>
    <div v-else>
      <div class="pt-10">
        <div v-for="(project, i) in poject_list_data" :key="i">
          <div class="left-project-grid mb-15" v-if="(i + 1) % 2 == 0">
            <div class="__content">
              <h2 class="__title">{{ project.title }}</h2>
              <v-hover v-slot="{ isHovering, props }">
                <v-card
                  class="__description_box pa-4 bg-bgtext"
                  :elevation="isHovering ? 4 : 2"
                  v-bind="props"
                >
                  <p>{{ project.description }}</p>
                </v-card>
              </v-hover>
              <div class="mt-2">
                <span
                  class="pr-2 text-opacity-8"
                  v-for="(tech, j) in project.tech_stack"
                  :key="j"
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
              <v-hover v-slot="{ props }">
                <div
                  class="mx-auto pro_img_container"
                  color="grey-lighten-4"
                  v-bind="props"
                >
                  <v-img cover :src="project.image" class="" width="100%">
                    <v-expand-transition>
                      <div
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
              <v-hover v-slot="{ props }">
                <div class="mx-auto" color="grey-lighten-4" v-bind="props">
                  <v-img cover :src="project.image" width="100%">
                    <v-expand-transition>
                      <div
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
                  class="__description_box pa-4 bg-bgtext"
                  :elevation="isHovering ? 4 : 2"
                  v-bind="props"
                >
                  <p>{{ project.description }}</p>
                </v-card>
              </v-hover>
              <div class="mt-3 text-right">
                <span
                  class="pr-2 text-opacity-8"
                  v-for="(tech, j) in project.tech_stack"
                  :key="j"
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

.__description_box {
  // background-color: transparent;
  font-size: 16px;
  p {
    opacity: 0.8;
  }
}
.v-card--reveal {
  align-items: center;
  top: 0;
  justify-content: center;
  opacity: 0.5;
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
import HeaderUnderLine from "@/components/helper-components/HeaderUnderLine.vue";
export default {
  components: { ExternalLinkBtn, HeaderUnderLine },
  name: "MyWork",
  data: () => ({
    card_title: "Projects",
    poject_list_data: [
      {
        title: "Cashpo",
        description:
          "A plateform which provides you Personal loans upto ₹2 lakhs instantly through a completely paperless process. Currently operated in 10+ cities Of India. Key Highlight Emandate/Nach, e-KYC, Auto Disbursment etc.",
        image: require("@/assets/images/projects/cashpo.png"),
        working_link: "https://cashpo.in",
        tech_stack: ["Django", "python", "Vuejs", "Vuetify", "HTML", "SCSS"],
      },
      {
        title: "Medx",
        description:
          "A Subscription Based B2B medicine delivery service. Delivering 2500+ order in a Day. Currently operated in Raipur Only. this platefoarm have some key feature Like Shipment Lifecycle, Live Traking, Wallet and Payout etc. ",
        image: require("@/assets/images/projects/medx.png"),
        working_link: "https://themedx.in",
        tech_stack: ["Django", "python", "Vuejs", "Vuetify", "HTML", "CSS"],
      },
      {
        title: "Tutors Factory",
        description:
          "Tutors Factory the best home tutor provider have connected the 10,000+ tutors with almost 25,000+ students across the nation. It has Student portal, Tutor portal, Bussiness Developer portal And Admin portal",
        image: require("@/assets/images/projects/tf.png"),
        working_link: "https://www.tutorsfactory.com",
        tech_stack: ["Django", "python", "Vuejs", "Vuetify", "HTML", "SCSS"],
      },
      {
        title: "Invitation Panda",
        description:
          "Invitation Panda is plateform where you can create a e-invitation card within few minutes. It has 1000+ temaplate and  10+ category  to choose from ",
        image: require("@/assets/images/projects/ip.png"),
        working_link: "https://invitationpanda.com",
        gitnub_link: "https://invitationpanda.com",
        tech_stack: ["Vuejs", "Vuetify", "HTML", "CSS"],
      },
      {
        title: "BurnBlack",
        description:
          "BurnBlack is plateform who provide the  finacial service like ITR, GST filling, Company registration, Billing Software and other Financial Services.",
        image: require("@/assets/images/projects/burnblack.png"),
        working_link: "https://burnblack.in/",
        tech_stack: ["Django", "python", "Vuejs", "Vuetify", "HTML", "SCSS"],
      },
      {
        title: "Rawfit",
        description:
          "Rawfit is subscription Base booking and helth monitoring system for a Rawfit User",
        image: require("@/assets/images/projects/rawfit.png"),
        working_link: "https://rawfit.in",
        tech_stack: ["Django", "python", "Vuejs", "HTML", "SCSS"],
      },
      {
        description:
          "GimBooks is Y combinator funded startup who  helps small business owners to create and share Invoice, Quotations, E-Waybills, Payment reminders, Payment receipts and much more!",
        title: "GimBooks",
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
