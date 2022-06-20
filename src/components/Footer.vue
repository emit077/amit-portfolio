<template>
  <v-footer app class="copyright-sec px-0 d-block">
    <div class="mb-3 text-center social-contact-sec mt-5">
      <div
        v-for="(item, i) in contact_list"
        :key="i"
        class="social-cont mx-2 d-inline-block pa-1"
      >
        <a :href="item.link" target="_blank" class="">
          <v-icon class="social-icon" size="32">{{ item.icon }}</v-icon>
        </a>
      </div>
    </div>
    <div class="text-center copyright-sec py-3">
      © {{ new Date().getFullYear() }} Amit Kumar Sahu
    </div>
  </v-footer>
</template>
<style lang="scss" scoped>
.social-contact-sec {
  a {
    text-decoration: none;
  }
  .social-cont {
    background-color: transparent;
    border-radius: 10px;
    border: solid 1.5px #ffffff;
    transition-duration: 1s;
  }

  .social-icon {
    color: white;
  }

  .social-cont:hover {
    transform: scale(1.23);
  }
}

.social-contact-sec a {
  text-decoration: none;
}
.copyright-sec {
  background-color: #23252f;
  color: lightgrey;
}
</style>

<script>
export default {
  name: "FooterVue",
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
  methods: {
    //
  },
};
</script>
