<template>
  <router-link
    :to="{
      name: 'CountryDetails',
      params: { id: details.numericCode, details: details.name },
    }"
    class="transform hover:scale-105 duration-300"
  >
    <div
      class="shadow-md items-center max-w-xs w-64 h-80 bg-little-100 dark:bg-prudent-100 rounded-md"
    >
      <div class="w-full h-1/2">
        <img
          :src="details.flags.svg"
          alt=""
          class="w-full h-full object-cover rounded-t-md"
        />
      </div>
      <div class="px-5 text-black dark:text-white">
        <h2 class="font-bold text-center text-lg py-3">{{ details.name }}</h2>
        <p class="font-medium text-sm py-1">
          Population: <span class="font-normal">{{ details.population }}</span>
        </p>
        <p class="font-medium text-sm py-1">
          Region: <span class="font-normal">{{ details.region }}</span>
        </p>
        <p class="font-medium text-sm py-1">
          Capital: <span class="font-normal">{{ details.capital }}</span>
        </p>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ["details"],
};
</script>

<style></style>
