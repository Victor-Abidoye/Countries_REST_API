<template>
  <div class="flex gap-4 flex-wrap md:justify-between py-8 justify-center">
    <Country
      v-for="(country, index) in countries.slice(0, 13)"
      :key="index"
      :details="country"
    />
  </div>
</template>

<script>
import Country from "./Country.vue";
export default {
  data() {
    return {
      countries: [],
    };
  },
  components: { Country },
  async mounted() {
    let data = await fetch("https://restcountries.com/v2/all");
    let countries = await data.json();
    this.countries = countries;
    console.log(countries.slice(0, 1));
  },
};
</script>

<style></style>
