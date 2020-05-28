<template>
  <div>
    <h1 class='effect__header'>{{eType}}</h1>

    <p>Select now what this character will be invulnerable to</p>
    <div class='ignore'>
      <div class='ignore__option' v-for='(p, key) in ignoreList' :key='key'>
        <label>{{p}}</label>
        <input type='checkbox' v-model='params.ignoreEffectType[p]' />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["sIndex", "eIndex", "eType"],
  data() {
    return {
      ignoreList: ["Damage", "Stun", "Healing", "Any", "AllButDamage"]
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
    if (this.params.ignoreEffectType === undefined) {
      this.params.ignoreEffectType = {};
    }
  }
};
</script>

<style lang="scss">
.ignore {
  width: 100%;
  height: 10rem;
  background-color: #2b2b2b;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  &__option {
    display: flex;
    flex-direction: column-reverse;
  }
}
</style>