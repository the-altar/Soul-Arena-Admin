<template>
  <div class="types">
    <FormulateInput
      name='type'
      :options='pokemonTypes'
      type='checkbox'
      label='Select a type'
      validation='required'
    />
  </div>
</template>

<script>
export default {
  computed: {
    pokemonTypes() {
      let b = {}
      const e = this.$store.getters["enums/getEnum"]("pokemonTypings")
      for(let key in Object.keys(e).slice(0,18)){
        b[key] = e[key]
      }
      return b;
    },
  },
};
</script>

<style lang="scss" scoped>
.types{
  margin-left: 3rem;
}
</style>