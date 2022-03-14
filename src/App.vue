<template>
  <div class="bg-little-200 dark:bg-prudent-200 h-screen">
    <Header></Header>
    <router-view :key="$route.path" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>

<style></style>
