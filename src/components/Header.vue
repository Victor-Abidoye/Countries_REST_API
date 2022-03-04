<template>
  <div class="flex justify-between p-5 bg-little-100 dark:bg-prudent-100">
    <h1 class="text-rose-700">Where in the World?</h1>
    <p @click="toggleMode"><i class="fa-light fa-moon"></i> Dark Mode</p>
  </div>
</template>

<script>
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
</script>

<style></style>
