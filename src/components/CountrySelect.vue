<template>
  <select
    aria-label="Regions"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value, 'region')"
    class="md:mb-12 w-3/5 bg-little-100 shadow-md rounded-md dark:bg-prudent-100 mb-0 mt-8 py-3 px-4 dark:text-white md:w-1/5 md:m-0 focus:outline-none"
  >
    <option v-for="continent in regions" :key="continent" :value="continent">
      {{ continent }}
    </option>
  </select>
</template>

<!--COMPOSITION API-->
<script setup>
import { defineProps, defineEmits } from "vue";
defineProps(["modelValue", "regions"]);
defineEmits(["update:modelValue"]);
</script>

<!--OPTIONS API-->
<!-- <script>
export default {
  name: "CountrySelect",
  props: ["modelValue", "regions"],
  emits: ["update:modelValue"],
};
</script> -->

<style></style>
