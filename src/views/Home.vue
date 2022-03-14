<template>
  <div
    class="p-5 bg-little-200 dark:bg-prudent-200 md:px-14"
    v-if="world.length"
  >
    <div class="md:flex md:justify-between">
      <CountryInput :modelValue="country" @update:modelValue="searching" />
      <p>{{ country }}</p>
      <CountrySelect
        :regions="regions"
        :modelValue="continent"
        @update:modelValue="searching"
      />
    </div>
    <Countries :countries="filteredCountries" />
  </div>
</template>

<script>
// @ is an alias to /src
import CountryInput from "@/components/CountryInput.vue";
import CountrySelect from "@/components/CountrySelect.vue";
import Countries from "@/components/Countries.vue";

export default {
  name: "Home",
  props: ["world"],
  data() {
    return {
      country: "",
      continent: "",
      searchInput: "",
      searchType: "",
    };
  },
  components: {
    CountryInput,
    CountrySelect,
    Countries,
  },
  methods: {
    searching(toSearchValue, toSearchType) {
      this.searchInput = toSearchValue;
      this.searchType = toSearchType;
    },
    searchedRegion(reg) {
      let regions = [];
      if (reg == "All Region") {
        regions = this.world;
      } else {
        regions = this.world.filter((coun) => {
          return coun.region == reg;
        });
      }
      return regions;
    },
  },
  computed: {
    regions: function () {
      let set1 = new Set();
      set1.add("All Region");
      for (let i in this.world) {
        set1.add(this.world[i].region);
      }
      return set1;
    },
    filteredCountries: function () {
      if (this.searchType == "region") {
        return this.searchedRegion(this.searchInput);
      } else {
        let countryResult;
        if (this.searchInput.length) {
          countryResult = this.world.filter((country) => {
            return country.name
              .toLowerCase()
              .includes(this.searchInput.toLowerCase());
          });
        } else {
          countryResult = this.world;
        }
        return countryResult;
      }
    },
  },
};
</script>
