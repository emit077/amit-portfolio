<template>
  <v-row>
    <v-col md="10" sm="6" cols="12" class="px-0">
      <p>
        Want to say "Hey!"? Got something you'd like to ask? New project or
        opportunity? Want to hire me? Ping me!
      </p>
      <p>Alternatively, shoot me an email at.</p>
      <a href="mailto:emitsahu077@gmail.com">emitsahu077@gmail.com</a>
    </v-col>
    <v-col md="2" sm="6" cols="12" class="px-0 text-right">
      <p class="card-title">Get in Touch</p>
    </v-col>
  </v-row>
  <div>AboutMe</div>
</template>
<style lang="scss" scoped>
.card-title {
  font-size: 5rem;
  writing-mode: vertical-lr;
  color: black;
  -webkit-text-fill-color: white; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
</style>

<script>
export default {
  name: "AboutMe",
  data: () => ({
    //
  }),
  methods: {
    //
  },
};
</script>
