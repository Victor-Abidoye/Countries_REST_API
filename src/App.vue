<template>
  <div class="bg-little-200 dark:bg-prudent-200 h-screen">
    <Header></Header>
    <Error
      v-if="store.presentError"
      content="Unable to fetch Details of Countries. Please check Your data connection"
    />
    <router-view v-if="store.world.length" :key="$route.path" />
  </div>
</template>

<!--COMPOSITION API-->
<script setup>
import Error from "./components/Error.vue";
import Header from "./components/Header.vue";
import { onBeforeMount, ref } from "vue";
import { availableCountries } from "./store/availableCountries";

const store = ref(null);
onBeforeMount(() => {
  store.value = availableCountries();
  store.value.getAllCountries();
});
</script>

<!--OPTIONS API-->
<!-- <script>
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
      store: null,
    };
  },
  created() {
    this.store = availableCountries();

    // Populating the world array with the getAllCountries() action
    this.store.getAllCountries();
  },
};
</script> -->

<style></style>
