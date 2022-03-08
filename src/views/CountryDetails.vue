<template>
  <div class="p-5 bg-little-200 dark:bg-prudent-200">
    <CustomButton />
    <div>
      <div class="w-80 h-56 mx-auto">
        <img
          :src="country.flags.svg"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <div class="dark:text-white">
        <h3 class="py-6 font-bold text-xl">{{ country.name }}</h3>
        <div>

        <div class="py-6">
          <p class="font-medium text-sm py-1">
            Native Name:
            <span class="font-normal">{{ country.nativeName }}</span>
          </p>
          <p class="font-medium text-sm py-1">
            Population:
            <span class="font-normal">{{ country.population }}</span>
          </p>
          <p class="font-medium text-sm py-1">
            Region: <span class="font-normal">{{ country.region }}</span>
          </p>
          <p class="font-medium text-sm py-1">
            Sub Region: <span class="font-normal">{{ country.subregion }}</span>
          </p>
          <p class="font-medium text-sm py-1">
            Capital: <span class="font-normal">{{ country.capital }}</span>
          </p>
        </div>
        <div>
          <p class="font-medium text-sm py-1">
            Top Level Domain:
            <span class="font-normal">{{ country.topLevelDomain[0] }}</span>
          </p>
          <p class="font-medium text-sm py-1">
            Currencies:
            <span class="font-normal">{{ country.currencies.name }}</span>
          </p>
          <p class="font-medium text-sm py-1">
            Languages: <span class="font-normal">{{ country.region }}</span>
          </p>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CustomButton from "../components/CustomButton.vue";
export default {
  props: ["world"],
  components: {
    CustomButton,
  },
  data() {
    return {
      country: {},
    };
  },
  async created() {
    let data = await fetch("https://restcountries.com/v2/all");
    let countries = await data.json();

    let holder = countries.filter(
      (country) => country.numericCode == this.$route.params.id
    );
    this.country = holder[0];
    console.log(this.country.flags);
  },
};
</script>

<style></style>
