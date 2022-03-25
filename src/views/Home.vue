<template>
  <div
    class="p-5 bg-little-200 dark:bg-prudent-200 md:px-14"
    v-if="store.world.length"
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
  <Error
    v-if="!filteredCountries.length"
    content="A Country with this name does not exist"
  />
</template>

<!--COMPOSITION API-->
<script setup>
// @ is an alias to /src
import CountryInput from "@/components/CountryInput.vue";
import CountrySelect from "@/components/CountrySelect.vue";
import Countries from "@/components/Countries.vue";
import Error from "@/components/Error.vue";
import { availableCountries } from "../store/availableCountries";
import { ref, onBeforeMount, computed } from "vue";

const country = ref("");
const continent = ref("");
const searchInput = ref("");
const searchType = ref("");
const store = ref(null);

onBeforeMount(() => {
  store.value = availableCountries();
});

function searching(toSearchValue, toSearchType) {
  searchInput.value = toSearchValue;
  searchType.value = toSearchType;
}
function searchedRegion(reg) {
  let regions = [];
  if (reg == "All Region") {
    regions = store.value.world;
  } else {
    regions = store.value.world.filter((coun) => {
      return coun.region == reg;
    });
  }
  return regions;
}

const regions = computed(() => {
  let set1 = new Set();
  set1.add("All Region");
  for (let i in store.value.world) {
    set1.add(store.value.world[i].region);
  }
  return set1;
});

const filteredCountries = computed(() => {
  if (searchType.value == "region") {
    return searchedRegion(searchInput.value);
  } else {
    let countryResult;
    if (searchInput.value.length) {
      countryResult = store.value.world.filter((country) => {
        return country.name
          .toLowerCase()
          .includes(searchInput.value.toLowerCase());
      });
    } else {
      countryResult = store.value.world;
    }
    return countryResult;
  }
});
</script>

<!--OPTIONS API-->
<!-- <script>
// @ is an alias to /src
import CountryInput from "@/components/CountryInput.vue";
import CountrySelect from "@/components/CountrySelect.vue";
import Countries from "@/components/Countries.vue";
import Error from "@/components/Error.vue";
import { availableCountries } from "../store/availableCountries";

export default {
  name: "Home",
  data() {
    return {
      country: "",
      continent: "",
      searchInput: "",
      searchType: "",
      world: [],
    };
  },
  components: {
    CountryInput,
    CountrySelect,
    Countries,
    Error,
  },
  created() {
    const store = availableCountries();
    this.world = store.world;
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
</script> -->
