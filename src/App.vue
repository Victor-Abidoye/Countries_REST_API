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
};
</script>

<style></style>
