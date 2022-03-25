<template>
  <div
    class="flex justify-center flex-col items-center h-4/5"
    style="margin-top: -100px"
  >
    <font-awesome-icon icon="triangle-exclamation" spin color="#FF0000" />

    <p class="px-5 pt-4 text-center font-bold text-red-700 italic text-xl">
      {{ content }}
    </p>
  </div>
</template>

<!--COMPOSITION API-->
<script setup>
import { defineProps } from "vue";
defineProps("content");
</script>

<!--OPTIONS API-->
<script>
export default {
  props: ["content"],
};
</script>

<style></style>
