<template>
  <div
    v-if="world.length"
    class="p-5 pt-0 bg-little-200 dark:bg-prudent-200 h-screen md:px-10"
  >
    <custom-button content="Back" class="my-14" @click="$router.go(-1)"
      ><font-awesome-icon icon="arrow-left-long"
    /></custom-button>
    <div class="lg:grid lg:grid-cols-2 lg:gap-20">
      <div class="w-80 h-56 mx-auto lg:w-full lg:h-full">
        <img
          :src="country.flags.svg"
          alt=""
          class="w-full h-full object-cover lg:object-scale-down"
        />
      </div>
      <div class="dark:text-white">
        <h3 class="py-6 font-bold text-xl">{{ country.name }}</h3>
        <div class="md:grid md:grid-cols-2">
          <div class="py-5">
            <p class="font-medium text-sm py-1">
              Native Name:
              <span class="font-normal">{{ country.nativeName }}</span>
            </p>
            <p class="font-medium text-sm py-1">
              Population:
              <span class="font-normal">{{
                Number(country.population).toLocaleString()
              }}</span>
            </p>
            <p class="font-medium text-sm py-1">
              Region: <span class="font-normal">{{ country.region }}</span>
            </p>
            <p class="font-medium text-sm py-1">
              Sub Region:
              <span class="font-normal">{{ country.subregion }}</span>
            </p>
            <p class="font-medium text-sm py-1">
              Capital: <span class="font-normal">{{ country.capital }}</span>
            </p>
          </div>
          <div class="py-5">
            <p class="font-medium text-sm py-1">
              Top Level Domain:
              <span class="font-normal">{{ country.topLevelDomain[0] }}</span>
            </p>
            <p class="font-medium text-sm py-1">
              Currencies:
              <span class="font-normal">{{ country.currencies[0].name }}</span>
            </p>
            <p class="font-medium text-sm py-1">
              Languages: <span class="font-normal">{{ country.region }}</span>
            </p>
          </div>
          <div class="py-5 md:col-span-2" v-if="country.borders">
            <h3 class="py-4">Border Countries:</h3>
            <div class="flex gap-4 flex-wrap">
              <CustomButton v-if="!saver.length" content="loading..." />
              <router-link
                v-else
                v-for="count in saver"
                :key="count"
                :to="{
                  name: 'CountryDetails',
                  params: { id: count.id, details: count.name },
                }"
              >
                <CustomButton :content="count.name" />
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "../components/CustomButton.vue";
import { availableCountries } from "../store/availableCountries";
export default {
  components: {
    CustomButton,
  },
  // props: ["world"],
  data() {
    return {
      country: {},
      saver: [],
      world: [],
    };
  },
  async created() {
    const store = availableCountries();
    this.world = store.world;
    let holder = this.world.filter(
      (country) => country.numericCode == this.$route.params.id
    );
    this.country = holder[0];
    this.country.borders ? this.borders() : null;
  },
  methods: {
    borders() {
      let holup = this.country.borders.map((item) => {
        let borderedCountry = this.world.filter((count) => {
          return count.alpha3Code == item;
        });
        return borderedCountry;
      });
      let saver = [];
      for (let item of holup) {
        let temp = item;
        let recent = {
          name: temp[0].name,
          id: temp[0].numericCode,
        };
        saver.push(recent);
      }
      this.saver = saver;
    },
  },
};
</script>

<style></style>
