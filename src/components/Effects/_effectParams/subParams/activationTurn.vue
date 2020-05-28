<template>
  <div class='activation'>
    <h5 class='header'>Activate effect when</h5>
    <div class='activation__option' v-for='(activateOn, key) in activationTurn' :key='key'>
      <label>{{activateOn}}</label>
      <input type='checkbox' v-model='params.activationType[activateOn]' />
    </div>
  </div>
</template>

<script>
export default {
  props:["eIndex", "sIndex"],
  data() {
    return {
      activationTurn: [
        "Stunned",
        "Damaged",
        "Targeted",
        "Immediate",
        "Expired",
        "Killed",
        "Healed",
        "Countered",
        "Reflected"
      ]
    };
  },
  computed: {
    params() {
      return this.$store.state.character.skills[this.sIndex].effects[
        this.eIndex
      ];
    }
  }
};
</script>

<style lang="scss">
.activation {
  width: 75%;
  height: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  background-color: #2b2b2b;
  border-radius: 10px;
  overflow: auto;
  margin: 0.5rem;

  &__option {
    width: 30%;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
