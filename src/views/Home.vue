<template>
  <div class="p-5 bg-little-200 dark:bg-prudent-200 md:px-14">
    <div class="md:flex md:justify-between">
      <CountryInput
        :modelValue="country"
        @update:modelValue="searchedCountry"
      />
      <CountrySelect
        :regions="regions"
        :modelValue="continent"
        @update:modelValue="searchedRegion"
      />
    </div>
    <Countries v-if="active" :countries="countries" />
  </div>
</template>

<script>
// @ is an alias to /src
import CountryInput from "@/components/CountryInput.vue";
import CountrySelect from "@/components/CountrySelect.vue";
import Countries from "@/components/Countries.vue";

export default {
  name: "Home",
  data() {
    return {
      active: false,
      country: "",
      countries: [],
      continent: "",
      countries_perm: [],
    };
  },
  components: {
    CountryInput,
    CountrySelect,
    Countries,
  },
  async created() {
    try {
      let data = await fetch("https://restcountries.com/v2/all");
      let world = await data.json();
      this.countries = world;
      this.countries_perm = world;
      this.active = true;
    } catch (error) {
      console.log("error");
    }
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
    async searchedCountry(inn) {
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
