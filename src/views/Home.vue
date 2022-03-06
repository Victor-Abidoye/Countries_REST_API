<template>
  <div class="p-5 bg-little-200 dark:bg-prudent-200">
    <div class="md:flex md:justify-between">
      <CustomInput :modelValue="country" @update:modelValue="searched" />
      <CustomSelect
        :regions="regions"
        :modelValue="continent"
        @update:modelValue="(searchContinent) => (continent = searchContinent)"
      />
    </div>
    <Countries :countries="countries" />
  </div>
</template>

<script>
// @ is an alias to /src
import CustomInput from "@/components/CustomInput.vue";
import CustomSelect from "@/components/CustomSelect.vue";
import Countries from "../components/Countries.vue";

export default {
  name: "Home",
  components: {
    CustomInput,
    CustomSelect,
    Countries,
  },
  data() {
    Countries;
    return {
      country: "",
      countries: [],
      continent: "",
    };
  },
  async created() {
    let data = await fetch("https://restcountries.com/v2/all");
    let countries = await data.json();
    this.countries = countries;
  },
  computed: {
    regions: function () {
      let set1 = new Set();
      for (let i in this.countries) {
        set1.add(this.countries[i].region);
      }
      return set1;
    },
  },
  methods: {
    async searched(inn) {
      let token = "";
      !inn
        ? (token = "https://restcountries.com/v2/all")
        : (token = `https://restcountries.com/v2/name/${inn}`);
      try {
        let data = await fetch(token);
        let res = await data.json();
        this.countries = res;
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>
