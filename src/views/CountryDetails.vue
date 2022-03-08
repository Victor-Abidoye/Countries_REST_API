<template>
  <div class="p-5 bg-little-200 dark:bg-prudent-200">
    <CustomButton />
    <div>
      <div>
        <img :src="country.flags.svg" alt="">
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
