<template>
  <div class="social-contact-sec" v-if="!$vuetify.display.mobile">
    <div
      v-for="(item, i) in contact_list"
      :key="i"
      class="social-cont mt-5 pa-1"
      data-aos="zoom-in-up"
      data-aos-duration="500"
    >
      <a :href="item.link" target="_blank" class="">
        <v-icon class="social-icon bg-bgtext" size="32">{{ item.icon }}</v-icon>
      </a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.social-contact-sec {
  position: fixed;
  background: transparent;
  z-index: 10;
  top: 80px;
  right: 30px;

  .social-cont {
    background-color: transparent;
    border-radius: 10px;
    border: solid 1.5px; // #ffffff;
    transition-duration: 1s;
  }

  .social-icon {
    background-color: transparent !important;
    // color: white;
  }

  .social-cont:hover {
    transform: scale(1.23);
  }
}

.social-contact-sec a {
  text-decoration: none;
}
</style>
<script>
// import { onMounted } from "vue";

export default {
  name: "MyWork",
  data: () => ({
    contact_list: [
      {
        icon: "mdi-github",
        link: "https://github.com/emit077",
      },
      {
        icon: "mdi-linkedin",
        link: "https://www.linkedin.com/in/amit-kumar-sahu-705a06137",
      },
      {
        icon: "mdi-stack-overflow",
        link: "https://stackoverflow.com/users/10175889/amit",
      },
      {
        icon: "mdi-instagram",
        link: "https://www.instagram.com/emit077/",
      },
    ],
    //
  }),
  created() {},
  methods: {
    //
  },
};
</script>
