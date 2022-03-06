<template>
  <div class="p-5 bg-little-200 dark:bg-prudent-200">
    <div class="md:flex md:justify-between">
      <CustomInput :modelValue="country" @update:modelValue="searched" />
      <CustomSelect
        :regions="regions"
        :modelValue="continent"
        @update:modelValue="searchedRegion"
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
      countries_perm: [],
    };
  },
  async created() {
    let data = await fetch("https://restcountries.com/v2/all");
    let countries = await data.json();
    this.countries = countries;
    this.countries_perm = countries
  },
  computed: {
    regions: function () {
      let set1 = new Set();
      set1.add("All Region");
      for (let i in this.countries_perm) {
        set1.add(this.countries_perm[i].region);
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
    searchedRegion(reg) {
      let res = this.countries_perm;
      if (reg == "All Region") {
        this.countries = res;
      } else {
        this.countries = res.filter((curr) => {
          return curr.region == reg;
        });
      }
    },
  },
};
</script>
