<template>
  <section class="title">
    <label for="skillName">Skill name and id: </label>
    <input
      id="skillName"
      v-model="$store.state.character.skills[index].name"
      type="text"
      placeholder="skill name"
    />

    <input
      id="skillId"
      v-model="$store.state.character.skills[index].id"
      type="text"
      disabled
    />

    <section class="param">
      <h5>
        Energy cost:
      </h5>
      <div class="param__cost" v-for="(energy, key) in energies" :key="key">
        <label class="param__cost__label" :for="energy"
          ><img :src='"~@/assets/img/" + energy + ".png"' /> x
        </label>
        <input
          class="param__cost__input"
          :id="energy"
          type="text"
          v-model.number="$store.state.character.skills[index].cost[key]"
        />
      </div>
    </section>
  </section>
</template>

<script>
export default {
  props: ["index"],
  data() {
    return {
      energies: ["speed", "strength", "mental", "spirit", "wild"],
    };
  },
};
</script>

<style lang="scss">

label {
  font-size: 12px;
  color: #d6d6d6;
  font-weight: bold;
}

.param {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1a1a1a;

  h5 {
    color: #d6d6d6;
  }

  &__cost {
    display: inline-block;
    margin: 10px;
    input {
      width: 10px;
      border: none;
      background-color: inherit;
      color: #d6d6d6;
    }
  }
}

#skillName {
  background-color: #2b2b2b;
  width: 200px;
  height: 30px;
  font-size: 15px;
  border: none;
  border-radius: 10px;
  color: #d6d6d6;
  text-align: center;
  margin: 1rem;
}

#skillId {
  border: none;
  background-color: #141212;
  height: 30px;
  width: 100px;
  border-radius: 10px;
  text-align: center;
  color: #332d2d;
}
</style>
