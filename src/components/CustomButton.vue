<template>
  <button
    class="h-7 px-6 text-xs font-light bg-little-100 dark:bg-prudent-100 dark:text-white shadow-md"
  >
    <slot></slot> {{ content }}
  </button>
</template>

<!--COMPOSITION API-->
<script setup>
import { defineProps } from "vue";
defineProps(["content"]);
</script>

<!--OPTIONS API-->
<!-- <script>
export default {
  props: ["content"],
};
</script> -->

<style></style>
