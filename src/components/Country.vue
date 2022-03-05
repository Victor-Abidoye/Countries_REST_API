<template>
  <div
    class="items-center max-w-xs w-64 h-72 bg-little-100 dark:bg-prudent-100 rounded-md"
  >
    <div class="w-full h-1/2">
      <img :src="details.flags.svg" alt="" class="w-full h-full object-cover" />
    </div>
    <h3>hekelklsdjf sakdfle</h3>
    <p>Population:</p>
    <p>Region</p>
    <p><b>Capital</b></p>
  </div>
</template>

<script>
export default {
  props: ["details"],
};
</script>

<style></style>
