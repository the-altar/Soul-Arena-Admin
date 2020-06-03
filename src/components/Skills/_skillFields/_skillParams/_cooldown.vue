<template>
  <div>
    <div class='inputContainer'>
      <label>Start cooldown:</label>
      <input
        class='cooldown'
        v-model.number='$store.state.character.skills[index].startCooldown'
        type='number'
        placeholder='cooldown'
      />
    </div>

    <div class='inputContainer'>
      <label>Base cooldown:</label>
      <input
        class='cooldown'
        v-model.number='$store.state.character.skills[index].baseCooldown'
        type='number'
        placeholder='base cooldown'
      />
    </div>

    <div class='inputContainer'>
      <label>Limit:</label>
      <input
        class='cooldown'
        v-model.number='$store.state.character.skills[index].limit'
        type='number'
        placeholder='Use limit'
      />
    </div>
  </div>
</template>


<script>
export default {
  props: ["index"]
};
</script>

<style lang="scss">
.inputContainer {
  width: 200px;
  height: 40px;
  display: flex;
  justify-content: right;
  align-items: center;
  margin-bottom: 1rem;

  input {
    border: none;
    background-color: #2b2b2b;
    width: 60%;
    height: 30px;
    text-align: center;
    border-radius: 10px;
  }
  label {
    width: 40%;
    height: 30px;
  }
}
</style>