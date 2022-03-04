<template>
  <div class="p-5 bg-little-200 dark:bg-prudent-200">
    <CustomInput
      :modelValue="countries"
      @update:modalValue="(searchCountry) => (countries = searchCountry)"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import CustomInput from "@/components/CustomInput.vue";

export default {
  name: "Home",
  components: {
    CustomInput,
  },
  data() {
    return {
      countries: "",
    };
  },
};
</script>
