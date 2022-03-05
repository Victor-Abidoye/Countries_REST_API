<template>
  <select
    name=""
    id=""
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    class="my-12 w-3/5 bg-little-100 shadow-md rounded-md dark:bg-prudent-100 py-3 px-4 dark:text-white md:w-1/5 md:m-0 focus:outline-none"
  >
    <option v-for="continent in continents" :key="continent" :value="continent">
      {{ continent }}
    </option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      continents: ["Africa", "Asia", "Europe"],
    };
  },
  props: ["modelValue"],
  emits: ["update:modelValue"],
};
</script>

<style></style>
