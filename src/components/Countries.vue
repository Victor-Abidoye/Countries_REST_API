<template>
  <div
    class="grid md:grid-cols-count2 lg:grid-cols-count3 xl:grid-cols-count4 gap-10 pt-8 md:justify-between md:p-0"
    v-if="countries.status !== 404"
  >
    <Country
      v-for="(country, index) in countries"
      :key="index"
      :details="country"
    />
  </div>
</template>

<script>
import Country from "./Country.vue";
export default {
  props: ["countries"],
  components: { Country },
};
</script>

<style></style>
