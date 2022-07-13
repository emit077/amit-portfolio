<style lang="scss" scoped>
.loader {
  border: 24px solid #d1d8e0; /* Light grey */
  border-radius: 50%;
  width: 240px;
  height: 240px;
  animation: spin 5s ease-in-out infinite;
  position: absolute;
  top: 600px;
  right: -140px;
}

.blob-position {
  position: absolute;
  top: -220px;
  left: -270px;
  //   opacity: 0.2;
  z-index: 1;
  animation: spin 5s ease-in-out infinite;
}
.blob-position-2 {
  position: absolute;
  top: -260px;
  right: -510px;
  //   opacity: 0.2;
  z-index: 1;
  animation: spin2 8s ease-in-out infinite;
}

@keyframes spin {
  0%,
  100% {
    transform: scale(0.7);
    border-width: 35px;
    opacity: (0.2);
  }
  50% {
    transform: scale(1.1);
    opacity: (0.8);
  }
}
@keyframes spin2 {
  0%,
  100% {
    transform: rotate(20deg);
    transform: scale(1);
  }
  50% {
    transform: rotate(-20deg);
    transform: scale(0.7);
  }
}
</style>

<template>
  <div class="loader"></div>
  <svg viewBox="0 0 800 500" width="90%" id="blobSvg" class="blob-position">
    <g transform="translate(-50, -131)">
      <path
        class="blob"
        d="M409.5,284.5Q393,319,392,373Q391,427,337,411Q283,395,252,386.5Q221,378,168.5,398Q116,418,126,361.5Q136,305,74.5,277.5Q13,250,34.5,203.5Q56,157,100,137Q144,117,179.5,106Q215,95,250,95.5Q285,96,322,105Q359,114,363.5,153.5Q368,193,397,221.5Q426,250,409.5,284.5Z"
        fill="#d1d8e0"
      ></path>
    </g>
  </svg>

  <svg viewBox="0 0 800 500" width="80%" id="blobSvg" class="blob-position-2">
    <g transform="translate(255, -31)">
      <path
        class="blob"
        d="M370,278Q376,306,391,365Q406,424,353,413Q300,402,266,410.5Q232,419,195.5,413.5Q159,408,160,361.5Q161,315,96.5,305.5Q32,296,25,248.5Q18,201,64,174.5Q110,148,133,118Q156,88,196,103.5Q236,119,274,88.5Q312,58,322,108.5Q332,159,355.5,175.5Q379,192,371.5,221Q364,250,370,278Z"
        fill="#d1d8e0"
      ></path>
    </g>
  </svg>
</template>
<script>
export default {
  name: "BorderCircle",
  data: () => ({
    card_title: "",
  }),
  methods: {},
};
</script>
