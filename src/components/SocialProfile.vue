<template>
  <div class="social-contact-sec">
    <div v-for="(item, i) in contact_list" :key="i">
      <a :href="item.link" target="_blank" class="">
        <img :src="item.image" alt="img" width="40"
      /></a>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.social-contact-sec {
  position: fixed;
  background: transparent;
  bottom: 20px;
  right: 40px;
}
.social-contact-sec a {
  text-decoration: none;
}
.social-contact-sec img {
  -webkit-filter: grayscale(70%); /* Safari 6.0 - 9.0 */
  filter: grayscale(70%);
}
.social-contact-sec img:hover {
  -webkit-filter: grayscale(0%); /* Safari 6.0 - 9.0 */
  filter: grayscale(0%);
}
</style>
<script>
export default {
  name: "MyWork",
  data: () => ({
    contact_list: [
      {
        image: require("@/assets/images/contact/github.svg"),
        link: "https://www.facebook.com/emit.sahu/about",
      },
      {
        image: require("@/assets/images/contact/linkedin.svg"),
        link: "https://www.linkedin.com/in/amit-kumar-sahu-705a06137",
      },
      {
        image: require("@/assets/images/contact/fb.svg"),
        link: "https://www.facebook.com/emit.sahu/about",
      },
      {
        image: require("@/assets/images/contact/insta.svg"),
        link: "https://www.facebook.com/emit.sahu/about",
      },
    ],
    //
  }),
  methods: {
    //
  },
};
</script>
