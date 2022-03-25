<template>
  <div
    class="grid justify-center md:grid-cols-count2 lg:grid-cols-count3 xl:grid-cols-count4 gap-10 pt-8 md:justify-between md:p-0"
  >
    <Country
      v-for="(country, index) in countries"
      :key="index"
      :details="country"
    />
  </div>
</template>

<!--COMPOSITION API-->
<script setup>
import Country from "./Country.vue";
import { defineProps } from "vue";

defineProps(["countries"]);
</script>

<!--OPTIONS API-->
<!-- <script>
import Country from "./Country.vue";
export default {
  props: ["countries"],
  components: { Country },
};
</script> -->

<style></style>
