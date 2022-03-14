<template>
  <div class="bg-little-200 dark:bg-prudent-200 h-screen">
    <Header></Header>
    <Error
      v-if="presentError"
      content="Unable to fetch Details of Countries. Please check Your data connection"
    />
    <router-view v-if="world.length" :world="world" :key="$route.path" />
  </div>
</template>

<script>
import Error from "./components/Error.vue";
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
    Error,
  },
  data() {
    return {
      world: [],
      presentError: false,
    };
  },
  async created() {
    try {
      let res = await fetch("https://restcountries.com/v2/all");
      let data = await res.json();
      this.world = data;
    } catch (error) {
      this.noError = true;
    }
  },
};
</script>

<style></style>
