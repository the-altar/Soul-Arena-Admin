<template>
    <textarea
      placeholder="skill description"
      v-model="$store.state.character.skills[index].description"
    ></textarea>
</template>

<script>
export default {
  props:['index']
}
</script>

<style lang='scss'>
  textarea {
    width: 200px;
    height: 200px;
    padding: 1rem;
    background-color: #2b2b2b;
    border: none;
    border-radius: 10px;
  }
</style>
