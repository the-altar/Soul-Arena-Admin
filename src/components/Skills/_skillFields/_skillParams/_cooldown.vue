<template>
  <div>
    <div>
      <label>Start cooldown:</label>
      <input
        class='cooldown'
        v-model.number='$store.state.character.skills[index].startCooldown'
        type='number'
        placeholder='cooldown'
      />
    </div>

    <label>Base cooldown:</label>
    <input
      class='cooldown'
      v-model.number='$store.state.character.skills[index].baseCooldown'
      type='number'
      placeholder='base cooldown'
    />
  </div>
</template>


<script>
export default {
  props: ["index"]
};
</script>

<style lang="scss">
.cooldown {
  border: none;
  background-color: #2b2b2b;
  width: 150px;
  height: 30px;
  text-align: center;
  margin: 1rem;
  border-radius: 10px;
}
</style>