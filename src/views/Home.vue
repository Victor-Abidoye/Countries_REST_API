<template>
  <div class="p-5 bg-little-200 dark:bg-prudent-200 md:flex md:justify-between">
    <CustomInput
      :modelValue="country"
      @update:modelValue="(searchCountry) => (country = searchCountry)"
    />
    <CustomSelect
      :modelValue="continent"
      @update:modelValue="(searchContinent) => (continent = searchContinent)"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import CustomInput from "@/components/CustomInput.vue";
import CustomSelect from "@/components/CustomSelect.vue";

export default {
  name: "Home",
  components: {
    CustomInput,
    CustomSelect,
  },
  data() {
    return {
      country: "",
      continent: "",
    };
  },
};
</script>
