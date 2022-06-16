<template>
  <div class="my-15">
    <div class="text-center py-6 mb-10">
      <!-- <span>Let me tell you</span> -->
      <h1 class="card-title">{{ card_title }}</h1>
      <header-under-line :w1="190" :w2="5" :w3="60" />
    </div>
    <!--  Small Screen -->
    <div v-if="$vuetify.display.mobile" class="mobile-view">
      <v-timeline density="compact" truncate-line="start" align="start">
        <v-timeline-item
          v-for="(item, i) in experices_list"
          :key="i"
          size="x-small"
        >
          <template v-slot:icon>
            <img
              :src="item.image"
              alt=""
              width="30"
              class="org__img elevation-3"
            />
          </template>
          <div class="text-left">
            <h4>{{ item.org_name }}</h4>
            <h5 class="mb-0">
              {{ item.designation }}
              <small style="font-weight: 500">({{ item.duration }})</small>
            </h5>
            <v-card-text class="work-hilight bg-bgtext text-opacity-7 pa-1">
              <ul>
                <li v-for="(hl, i) in item.hilights" :key="i">{{ hl }}</li>
              </ul>
            </v-card-text>
          </div>
        </v-timeline-item>
      </v-timeline>
    </div>
    <!-- Large Screen  -->
    <div v-else>
      <v-timeline truncate-line="start" align="start">
        <template v-for="(item, i) in experices_list" :key="i">
          <v-timeline-item size="small" v-if="i % 2 == 0">
            <template v-slot:icon>
              <img
                :src="item.image"
                alt=""
                width="30"
                class="org__img elevation-3"
              />
            </template>
            <template v-slot:opposite>
              <div class="text-left">
                <h4 class="org_name">{{ item.org_name }}</h4>
                <small>({{ item.duration }})</small>
              </div>
            </template>
            <v-card class="elevation-2 pa-3 bg-bgtext">
              <h4 class="mb-0">{{ item.designation }}</h4>
              <v-card-text class="work-hilight bg-bgtext text-opacity-7 pt-1">
                <ul>
                  <li v-for="(hl, i) in item.hilights" :key="i">{{ hl }}</li>
                </ul>
              </v-card-text>
            </v-card>
          </v-timeline-item>
          <v-timeline-item size="small" v-else>
            <template v-slot:icon>
              <img
                :src="item.image"
                alt=""
                width="30"
                class="org__img elevation-3"
              />
            </template>
            <template v-slot:opposite>
              <v-card class="elevation-2 pa-3 bg-bgtext">
                <h4 class="mb-0">{{ item.designation }}</h4>
                <v-card-text class="work-hilight bg-bgtext text-opacity-7 pt-1">
                  <ul>
                    <li v-for="(hl, i) in item.hilights" :key="i">
                      {{ hl }}
                    </li>
                  </ul>
                </v-card-text>
              </v-card>
            </template>
            <div class="text-left">
              <h4 class="org_name">{{ item.org_name }}</h4>
              <small>({{ item.duration }})</small>
            </div>
          </v-timeline-item>
        </template>
      </v-timeline>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.org_name {
  white-space: break-spaces;
}
.org__img {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  /* border: 1px solid lightgray; */
}
.work-hilight li {
  margin-bottom: 12px;
  padding-left: 10px;
  font-size: 16px;
}
.mobile-view {
  .org__img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
  .work-hilight li {
    margin-bottom: 8px;
    padding-left: 10px;
    font-size: 15px;
  }
}
</style>
<style>
.v-timeline-item__body {
  padding-bottom: 0px !important;
}
</style>

<script>
import HeaderUnderLine from "@/components/helper-components/HeaderUnderLine.vue";

export default {
  name: "ExperianceVue",
  components: { HeaderUnderLine },
  data: () => ({
    card_title: "Where I’ve Worked",
    experices_list: [
      {
        org_name: "Cognizant\nTechnology Solutions India",
        duration: "Nov 2021 - ",
        image: require("@/assets/images/others/cts.jpg"),
        designation: "Programmer analyst",
        hilights: [
          "Working in very Large scale project and huge team. Primarily focus on frontend development.",
          "Creating highly customizable and reusable components with help of Vuejs.",
          "Writing robust and efficeant code",
        ],
      },
      {
        org_name: "Codenicely\nSoftware Service LLP",
        duration: "Nov 2019 - Sep 2021",
        image: require("@/assets/images/others/cn.png"),
        designation: "Associate Software Developer",
        hilights: [
          "Contributed software engineering expertise in the development of the product through the software lifecycle, from requirement definition through successful deployment.",
          "Build/Contributed to 7+ projects.",
          "Build  the Amazing web application in Vue Js and restful API in Django",
          "Introduce the methodology and best practices that enhance the product definition, release processes, and customization of the application to user needs.",
          "Writing efficient, compact, and reusable code.Created documentation of the project for best practice and better understanding.",
        ],
      },
      {
        org_name: "3G Solutions\nSoftware Solutions",
        duration: "jun 2019 - Oct 2019",
        image: require("@/assets/images/others/3g.png"),
        designation: "Junior Software Developer",
        hilights: [
          "Effectively address the complex bug under the supervision of seniors.",
          "Implemented and updated the application modules under the supervision of seniors.",
        ],
      },
    ],
  }),
  methods: {
    //
  },
};
</script>
