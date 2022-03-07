<template>
  <div>
    <Header></Header>
    <router-view :world="mainCountries" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
  data() {
    return {
      mainCountries: [],
    };
  },
  async created() {
    let data = await fetch("https://restcountries.com/v2/all");
    let countries = await data.json();
    this.mainCountries = countries;
  },
};
</script>

<style></style>
