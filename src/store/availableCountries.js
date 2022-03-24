import { defineStore } from "pinia";

export const availableCountries = defineStore("world", {
  state: () => {
    return {
      world: [],
      presentError: false,
    };
  },
  actions: {
    async getAllCountries() {
      try {
        let res = await fetch("https://restcountries.com/v2/all");
        let data = await res.json();
        this.world = data;
      } catch (error) {
        this.presentError = true;
      }
    },
  },
});
