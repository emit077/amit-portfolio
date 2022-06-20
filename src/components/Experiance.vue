<template>
  <!-- timeline -->
  <v-timeline density="compact" truncate-line="start" align="start">
    <template v-for="(item, i) in experices_list" :key="i">
      <v-timeline-item size="small">
        <template v-slot:icon>
          <img
            :src="item.image"
            alt=""
            width="30"
            class="org__img elevation-3"
          />
        </template>
        <v-card class="elevation-5 px-5 py-3 experince-card">
          <h2 class="org_name">{{ item.org_name }}</h2>
          <h4 class="mb-0">
            {{ item.designation }} <small>({{ item.duration }})</small>
          </h4>
          <v-card-text class="work-hilight bg-transparent px-4 pb-0">
            <ul>
              <li v-for="(hl, i) in item.hilights" :key="i">{{ hl }}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-timeline-item>
    </template>
  </v-timeline>
</template>
<style lang="scss" scoped>
.org_name {
  // white-space: break-spaces;
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
.experince-card {
  border-radius: 10px;
  background-color: #ffffff1c;
  color: #000;
}
</style>
<style>
.v-timeline-item__body {
  padding-bottom: 0px !important;
}
</style>

<script>
export default {
  name: "ExperianceVue",
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
