<template>
  <div>
    <label>Select a class:</label>
    <select class='select' v-model='$store.state.character.skills[index].class'>
      <option value='physical'>Physical</option>
      <option value='special'>Special</option>
      <option value='status'>Status</option>
    </select>

    <div>
      <label class='checkbox'>Is disabled:</label>
      <input type='checkbox' v-model='$store.state.character.skills[index].disabled' />
    </div>
  </div>
</template>

<script>
export default {
  props: ["index"]
};
</script>

<style lang="scss">
.select {
  width: 125px;
  height: 30px;
  padding-left: 10px;
  color: #d6d6d6;
  background-color: #2b2b2b;
  border: none;
  border-radius: 10px;
  margin: 1rem;
}
</style>
