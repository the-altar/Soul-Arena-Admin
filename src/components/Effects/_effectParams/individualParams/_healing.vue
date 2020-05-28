<script>
export default {
  props: ["sIndex", "eIndex", "eType"],
  data() {
    return {
      healingType: ["Normal", "True"]
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
    if (this.params.healingType === undefined) this.params.healingType = {};
  }
};
</script>

<template>
  <div>
    <h1 class='effect__header'>{{eType}}</h1>

    <div class="center">
      <label>healing amount:</label>
      <input class='healing__value' v-model.number='params.value' type='Number' />

      <div class="healing__type" v-for='(type, key) in healingType' :key='key'>
        <label for="">{{type}}</label>
        <input type='checkbox' v-model='params.healingType[type]' />
      </div>

    </div>
  </div>
</template>

<style lang="scss">
.healing {
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