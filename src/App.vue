<template>
  <div class="bg-little-200 dark:bg-prudent-200 h-screen">
    <Header></Header>
    <Error
      v-if="store.presentError"
      content="Unable to fetch Details of Countries. Please check Your data connection"
    />
    <!-- <router-view v-if="world.length" :world="world" :key="$route.path" /> -->
    <router-view v-if="store.world.length" :key="$route.path" />
  </div>
</template>

<script>
import Error from "./components/Error.vue";
import Header from "./components/Header.vue";
import { availableCountries } from "./store/availableCountries";
export default {
  components: {
    Header,
    Error,
  },
  data() {
    return {
      // world: [],
      // presentError: false,
      store: null,
    };
  },
  created() {
    this.store = availableCountries();

    // Populating the world array with the getAllCountries() action
    this.store.getAllCountries();

    // try {
    //   let res = await fetch("https://restcountries.com/v2/all");
    //   let data = await res.json();
    //   this.world = data;
    // } catch (error) {
    //   this.noError = true;
    // }
  },
};
</script>

<style></style>
