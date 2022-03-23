import { defineStore } from "pinia";

export const availableCountries = defineStore("world", {
  state: () => {
    return {
        world: [],
    };
  },
});
