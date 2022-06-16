<template>
  <div>
    <h1>Blog Title</h1>
    <h3>Blog Subtitle</h3>
  </div>
  <div class="text-center">
    <img :src="image" alt="" class="blog-image" />
  </div>
  <div>
    <p>
      Many has fallen in the path, like Backbone or Sencha, leaving corpses:
      tons of legacy code that has to maintained. Others survive, like jQuery,
      that surprisingly still have a large community. Others, like Angular, does
      not seem to lift off as expected or promised.
    </p>
    <iframe
      src="https://gist.github.com/emit077/f15afc00dde3f75557305b7cf2b3e918"
      frameborder="0"
    ></iframe>
  </div>
</template>
<style lang="scss">
.blog-image {
  width: 100%;
}
</style>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PostView",
  components: {},
  data: () => ({
    image: require("@/assets/images/projects/ip.png"),
  }),
});
</script>
