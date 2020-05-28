<template>
  <section>
    <component
      class='effect__specific'
      :is='eType'
      :eType='eType'
      :sIndex='sIndex'
      :eIndex='eIndex'
    ></component>

    <label>duration:</label>
    <input
      class='effect__input'
      type='Number'
      placeholder='duration'
      v-model.number='params.duration'
    />

    <label>Turn delay:</label>
    <input
      class='effect__input'
      type='number'
      v-model.number='params.delay'
      placeholder='number of turns'
    />

    <div class='effect__division'>
      <activation :eIndex='eIndex' :sIndex='sIndex'></activation>
      <div>
        <label>Disabled:</label>
        <input type='checkbox' v-model='params.disabled' />
        <br />

        <label>Linked:</label>
        <input type='checkbox' v-model='params.linked' />
        <br />
      </div>
    </div>

    <p>
      Effect target choices:
      <select v-model='params.target'>
        <option v-for='(app, key) in apply' :key='key' :value='app'>{{app}}</option>
      </select>
    </p>
  </section>
</template>

<script>
import Damage from "./individualParams/_damage";
import Invulnerability from "./individualParams/_invulnerability";
import Counter from "./individualParams/_counter";
import Healing from "./individualParams/_healing";
import IgnoreEffect from "./individualParams/_ignoreEffect";
import ModSkillParam from "./individualParams/_modSkillParam";

import activation from "./subParams/activationTurn";

export default {
  components: {
    Damage,
    Invulnerability,
    Counter,
    Healing,
    IgnoreEffect,
    ModSkillParam,
    activation,
  },
  props: ["eIndex", "sIndex", "eType"],
  data() {
    return {
      apply: [
        "OneEnemy",
        "AllEnemies",
        "OneAlly",
        "AllAllies",
        "AllAlliesExceptSelf",
        "Any",
        "Self"
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
.effect {
  &__specific {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__header {
    color: #fafafa;
    width: 200px;
    height: 50px;
    font-size: 15px;
    background-color: #1a1a1a;
    line-height: 50px;
    text-align: center;
    border-radius: 10px;
  }

  &__input {
    border: none;
    border-radius: 10px;
    height: 30px;
    width: 150px;
    background-color: #2b2b2b;
    text-align: center;
    color: #fafafa;
    margin: 0.5rem;
  }

  &__division {
    width: 90%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>