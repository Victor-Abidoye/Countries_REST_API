<template>
  <div class="p-5 bg-little-200 dark:bg-prudent-200 md:flex md:justify-between">
    <CustomInput
      :modelValue="countries"
      @update:modalValue="(searchCountry) => (countries = searchCountry)"
    />
    <CustomSelect
      :modalValue="country"
      @update:modalValue="(newCountry) => (countries = newCountry)"
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
    };
  },
};
</script>
