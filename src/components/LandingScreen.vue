<template>
  <div>
    <!-- <div v-if="!$vuetify.display.mobile" class="circle-loader-position">
      <LoaderCiercle />
    </div>
    <div v-if="!$vuetify.display.mobile" class="circle-watch-position">
      <WatchCircle />
    </div> -->
    <div class="site-header">
      <div class="text-center">
        <img
          :src="profile_image"
          alt="img"
          v-if="$vuetify.display.mobile"
          class="profile-image hover-animate-pendulam-infinite"
        />
      </div>
      <div
        class="d-flex justify-center"
        :class="$vuetify.display.mobile ? '' : ' pt-10'"
      >
        <div class="pa-2">
          <img
            :src="profile_image"
            alt="img"
            v-if="!$vuetify.display.mobile"
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
      <div class="text-center">
        <h2 v-if="$vuetify.display.mobile">I build things for the web</h2>
        <h1 v-else>I build things for the web</h1>
        <p>Web Developer | Backend Developer</p>
      </div>
      <header-under-line :w1="5" :w2="170" :w3="30" />
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
  // transform: scale(1.12);
}
.profile-image {
  width: 160px;
}
.circle-loader-position {
  position: absolute;
  left: -400px;
  top: 300px;
}
.circle-watch-position {
  position: absolute;
  width: 200px;
  right: 30px;
  display: none;
}

@media screen and (max-width: 900px) {
  .site-header {
    min-height: 95vh;
    padding-top: 5vh;
  }
  .site-header__title p:nth-of-type(2) {
    font-size: 3rem;
    line-height: 80%;
  }
  .site-header__title p:first-of-type {
    font-size: 7.6rem;
    line-height: 80%;
  }
  .profile-image {
    width: 150px;
    display: inline;
  }
}
</style>

<script>
import HeaderUnderLine from "@/components/helper-components/HeaderUnderLine.vue";
// import LoaderCiercle from "@/components/helper-components/LoaderCiercle.vue";
// import WatchCircle from "@/components/helper-components/WatchCircle.vue";
export default {
  name: "LandingScreen",
  components: {
    HeaderUnderLine,
    //  LoaderCiercle,
    //  WatchCircle
  },
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
