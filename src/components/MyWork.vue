<template>
  <v-row justify="center">
    <v-col
      cols="12"
      md="6"
      v-for="(project, i) in poject_list_data"
      :key="i"
      class="mb-4"
    >
      <FlipCard3D
        :project="project"
        :data-aos="i % 2 == 0 ? 'slide-left' : 'slide-right'"
      ></FlipCard3D>
    </v-col>
  </v-row>
</template>
<style lang="scss" scoped></style>
<script>
import FlipCard3D from "@/components/project-card-template/FlipCard3D";

export default {
  components: { FlipCard3D },
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
        title: "Wednicely",
        description:
          "Wednicely Panda is plateform where you can create a e-invitation card within few minutes. It has 1000+ temaplate and  10+ category  to choose from ",
        image: require("@/assets/images/projects/ip.png"),
        working_link: "https://wednicely.com/",
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
          "Rawfit is subscription Based helth monitoring system based on google fit. Which also provide service to book a activity sesson.",
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
