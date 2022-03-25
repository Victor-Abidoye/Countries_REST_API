<template>
  <input
    type="text"
    :value="modelValue"
    placeholder="Search a country"
    class="bg-little-100 shadow-md rounded-md dark:bg-prudent-100 w-full h-10 px-8 py-6 dark:text-white md:w-1/4 focus:outline-none"
    @input="$emit('update:modelValue', $event.target.value, 'country')"
  />
</template>

<!--COMPOSITION API-->
<script setup>
import { defineProps, defineEmits } from "vue";
defineProps(["modelValue"]);
defineEmits(["update:modelValue"]);
</script>

<!--OPTIONS API-->
<!-- <script>
export default {
  name: "CountryInput",
  props: ["modelValue"],
  emits: ["update:modelValue"],
};
</script> -->

<style></style>
