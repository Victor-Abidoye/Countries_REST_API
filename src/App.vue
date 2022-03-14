<template>
  <div class="bg-little-200 dark:bg-prudent-200 h-screen">
    <Header></Header>
    <div v-if="noError" class="flex justify-center flex-col items-center  h-full" style="margin-top: -68px">
      <font-awesome-icon icon="triangle-exclamation" size="2xl" spin color="#FF0000" />

    <p class="px-5 pt-4 text-center font-bold text-red-700 italic text-xl">Unable to fetch Details of Countries. Please check Your data connection</p>
    </div>
    <router-view v-if="world.length" :world="world" :key="$route.path" />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  components: {
    Header,
  },
  data() {
    return {
      world: [],
      noError: false,
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
