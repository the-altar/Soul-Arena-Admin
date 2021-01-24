const charGroups = function() {
  return this.$store.getters["enums/getEnum"]("pokemonTypings");
};
export default {
  charGroups,
};
