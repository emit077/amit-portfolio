<template>
  <div class="under-line-style">
    <div
      class="line-elm mr-2"
      :style="{ width: w1 ? w1 + 'px' : '130px' }"
    ></div>
    <div
      class="line-elm mr-2"
      :style="{ width: w2 ? w2 + 'px' : '20px' }"
    ></div>
    <div class="line-elm" :style="{ width: w3 ? w3 + 'px' : '5px' }"></div>
  </div>
</template>
<style lang="scss" scoped>
.under-line-style {
  height: 3px;
  text-align: center;
  .line-elm {
    background: rgb(var(--v-theme-surface));
    height: 100%;
    display: inline-block;
    width: 15px;
    border-radius: 5px;
  }
}
</style>
<script>
export default {
  name: "HeaderUnderLine",
  props: ["w1", "w2", "w3"],
  data: () => ({
    card_title: "About me",
  }),
  methods: {},
};
</script>
