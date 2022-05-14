<template>
  <div class="site-header">
    <div class="d-flex justify-center pt-10">
      <div class="pa-2">
        <img
          :src="profile_image"
          alt="img"
          class="profile-image hover-animate-pendulam-infinite"
        />
      </div>
      <div class="pa-2">
        <div class="text-center site-header__title">
          <h1>
            <p>Amit</p>
            <p>Kumar Sahu</p>
          </h1>
        </div>
      </div>
    </div>
    <div class="text-center pl-4">
      <h1>I build things for the web</h1>
      <p>Web Developer | Backend Developer</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.site-header {
  min-height: 95vh;
  padding-top: 15vh;
}
.site-header__title p:nth-of-type(2) {
  font-size: 4.5rem;
  line-height: 80%;
}
.site-header__title p:first-of-type {
  font-size: calc(3 * 3.8rem);
  line-height: 80%;
}
.site-header__title p:hover {
  transform: scale(1.12);
}
.profile-image {
  width: 160px;
}

@media screen and (max-width: 900px) {
  .site-header__title p:nth-of-type(2) {
    font-size: 1.8rem;
    line-height: 80%;
  }
  .site-header__title p:first-of-type {
    font-size: calc(3 * 1.5rem);
    line-height: 80%;
  }
  .profile-image {
    width: 65px;
  }
}
</style>

<script>
export default {
  name: "LandingScreen",
  components: {},
  data: () => ({
    name_text: "Amit_Sahu",
    profile_image: require("@/assets/images/profile-assets/profile.png"),
    //
  }),
  methods: {
    //
  },
};
</script>
