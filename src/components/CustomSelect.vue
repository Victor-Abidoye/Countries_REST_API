<template>
  <select
    name=""
    id=""
    :value="modalValue"
    @input="$emit('update:modalValue', $event.target.value)"
    class="my-10 w-3/5 bg-prudent-100 py-3 px-4 text-white md:w-1/5 md:m-0"
  >
    <option v-for="continent in continents" :key="continent">
      {{ continent }}
    </option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      continents: ["Filter by Region", "Africa", "Asia", "Europe"],
    };
  },
  props: ["modaValue"],
};
</script>

<style></style>
