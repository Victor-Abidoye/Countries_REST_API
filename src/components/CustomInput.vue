<template>
  <input
    type="text"
    :value="modalValue"
    placeholder="Search a country"
    class="bg-prudent-100 w-full h-10 px-8 py-6 text-white md:w-1/4"
    @input="$emit('update:modalValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: "CustomInput",
  props: ["modalValue"],
  emits: ["update:modalValue"],
};
</script>

<style></style>
