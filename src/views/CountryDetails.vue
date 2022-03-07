<template>
  <div>
    {{ $route.params.id }}
  </div>
</template>

<script>
export default {
  props: ["world"],
  methods: {
    selectedCountry() {
      this.world.filter(
        (country) => country.numericCode == this.$route.params.id
      );
    },
  },
};
</script>

<style></style>
