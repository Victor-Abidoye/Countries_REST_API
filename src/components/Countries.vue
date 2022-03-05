<template>
  <div class="flex gap-10 flex-wrap md:justify-between py-8 justify-center">
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
