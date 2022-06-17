<template>
  <!-- Loader 2 -->

  <svg
    version="1.1"
    id="L2"
    x="0px"
    y="0px"
    viewBox="0 0 100 100"
    enable-background="new 0 0 100 100"
    xml:space="preserve"
  >
    <!--<circle fill="none" class="fill-color" stroke-miterlimit="10" cx="15px" cy="20px" r="12px"/>-->
    <!--<circle fill="none" class="fill-color" stroke-miterlimit="10" cx="85px" cy="20px" r="12px"/>-->
    <circle
      fill="none"
      stroke-width="2"
      stroke="aqua"
      stroke-miterlimit="10"
      cx="50"
      cy="50"
      r="35"
    />
    <!--    <circle fill="none" class="fill-color" stroke-miterlimit="10" cx="50" cy="50" r="40"/>-->
    <!--    hours-->

    <line
      fill="none"
      stroke-linecap="round"
      class="fill-color"
      stroke-miterlimit="10"
      x1="50"
      y1="50"
      x2="50"
      y2="30"
    >
      <animateTransform
        attributeName="transform"
        dur="86400s"
        type="rotate"
        :from="hour_angel + ' 50 50'"
        to="360 50 50"
        repeatCount="indefinite"
      />
    </line>

    <!--  minutes  -->
    <line
      fill="none"
      stroke-linecap="round"
      class="fill-color"
      stroke-miterlimit="10"
      x1="50"
      y1="50"
      x2="50"
      y2="23"
    >
      <animateTransform
        attributeName="transform"
        dur="3600s"
        type="rotate"
        :from="minute_angel + ' 50 50'"
        to="360 50 50"
        repeatCount="indefinite"
      />
    </line>

    <!--  sec  -->
    <line
      fill="none"
      stroke-linecap="round"
      stroke-width="1px"
      class="sec-pin"
      stroke-miterlimit="10"
      x1="50"
      y1="50"
      x2="50"
      y2="18"
    >
      <animateTransform
        attributeName="transform"
        dur="60s"
        type="rotate"
        :from="second_angel + ' 50 50'"
        to="360 50 50"
        repeatCount="indefinite"
      />
    </line>
  </svg>
</template>

<style>
.fill-color {
  stroke: aqua;
  stroke-width: 1px;
}

.sec-pin {
  stroke: aqua;
  stroke-width: 0.5;
}
</style>

<script>
export default {
  name: "LandingScreen",
  data: () => ({
    // time: "Amit_Sahu",
    ceneter: 50,
    hour_angel: 0,
    minute_angel: 0,
    second_angel: 0,
  }),
  mounted() {
    const ANGLE_PER_HOUR = 360 / 12;
    const ANGLE_PER_MINUTE = 360 / 60;
    const ANGLE_PER_SECOND = 360 / 60;

    const today = new Date();
    let hours = today.getHours();
    let minute = today.getMinutes();
    let second = today.getSeconds();
    //  conver hour to 12Hour formate
    hours = hours > 12 ? hours - 12 : hours;
    console.log("watch mounted", hours, minute, second);

    this.hour_angel = ANGLE_PER_HOUR * hours;
    this.minute_angel = ANGLE_PER_MINUTE * minute;
    this.second_angel = ANGLE_PER_SECOND * second;
  },
  methods: {
    //
  },
};
</script>
