<script>
export default {
  props: ["sIndex", "eIndex", "eType"],
  data() {
    return {
      damageType: ["Affliction", "Piercing", "True", "Normal"]
    };
  },
  computed: {
    params() {
      return this.$store.state.character.skills[this.sIndex].effects[
        this.eIndex
      ];
    }
  },
  created() {
    if (this.params.damageType === undefined) this.params.damageType = {};
    if (this.params.activationType === undefined)
      this.params.activationType = {};
  }
};
</script>

<template>
  <div>
    <h1 class='effect__header'>{{eType}}</h1>

    <div class="center">
      <label>damage amount:</label>
      <input class='damage__value' v-model.number='params.value' type='Number' />

      <div class="damage__type" v-for='(type, key) in damageType' :key='key'>
        <label for="">{{type}}</label>
        <input type='checkbox' v-model='params.damageType[type]' />
      </div>

    </div>
  </div>
</template>

<style lang="scss">
.damage {
  &__value {
    width: 50px;
    height: 30px;
    margin: 0.5rem;
    background-color: #2b2b2b;
    border: none;
    border-radius: 10px;
    text-align: center;
    color: #fafafa;
  }

  &__type{
    display: inline-flex;
    flex-direction: column-reverse;
    margin: 0.5rem;
    label {
      font-size: 10px;
    }
  }
}
</style>