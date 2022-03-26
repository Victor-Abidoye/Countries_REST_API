<template>
  <div
    class="flex sticky top-0 justify-between p-5 md:px-14 bg-little-100 dark:bg-prudent-100"
  >
    <router-link :to="{ name: 'Home' }">
      <h1
        class="text-black cursor-pointer dark:text-little-100 md:text-xl font-bold"
      >
        Where in the World?
      </h1>
    </router-link>
    <p
      @click="toggleMode"
      class="text-black dark:text-little-100 cursor-pointer"
    >
      <font-awesome-icon icon="moon" /> Dark Mode
    </p>
  </div>
</template>

<!--COMPOSITION API-->
<script setup>
function toggleMode() {
  if (localStorage.theme == "light") {
    localStorage.theme = "dark";
    document.documentElement.classList.add("dark");
  } else {
    localStorage.theme = "light";
    document.documentElement.classList.remove("dark");
  }
}
</script>

<!--OPTIONS API-->
<!-- <script>
export default {
  name: "Header",
  methods: {
    toggleMode() {
      if (localStorage.theme == "light") {
        localStorage.theme = "dark";
        document.documentElement.classList.add("dark");
      } else {
        localStorage.theme = "light";
        document.documentElement.classList.remove("dark");
      }
    },
  },
};
</script> -->

<style></style>
