<template>
  <input
    type="text"
    :vlaue="modalValue"
    placeholder="Search a country"
    class="bg-prudent-100 w-full h-10 p-3 text-white"
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
