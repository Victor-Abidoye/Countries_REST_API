<template>
  <div>
    <Header></Header>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  data() {
    return {
      world: [],
    };
  },
  components: {
    Header,
  },
  // async created() {
  //   try {
  //     let data = await fetch("https://restcountries.com/v2/all");
  //     let countries = await data.json();
  //     this.world = await countries;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // },
};
</script>

<style></style>
