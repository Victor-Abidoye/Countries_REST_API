<template>
  <div
    v-if="active"
    class="p-5 bg-little-200 dark:bg-prudent-200 h-screen md:px-10"
  >
    <custom-button
      content="Back"
      class="my-5"
      @click="$router.go(-1)"
    ></custom-button>
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
                country.population
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
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
export default {
  components: {
    CustomButton,
  },
  data() {
    return {
      active: false,
      country: {},
      saver: [],
    };
  },
  async created() {
    try {
      let data = await fetch("https://restcountries.com/v2/all");
      let countries = await data.json();

      let holder = countries.filter(
        (country) => country.numericCode == this.$route.params.id
      );
      this.country = holder[0];
      this.country.borders ? this.borders() : null;
      this.active = true;
    } catch (error) {
      console.log("here");
    }
  },
  methods: {
    async borders() {
      let holup = this.country.borders.map(async (item) => {
        try {
          let data = await fetch(`https://restcountries.com/v2/alpha/${item}`);
          let res = await data.json();
          return res;
        } catch (error) {
          console.log("test");
        }
      });
      let saver = [];
      for (let item of holup) {
        let temp = await item;
        let recent = {
          name: temp.name,
          id: temp.numericCode,
        };
        saver.push(recent);
      }
      this.saver = saver;
      return saver;
    },
  },
  mounted() {
    this.active = false;
  },
};
</script>

<style></style>
