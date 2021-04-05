<template>
  <div v-if="character" class="profile">
    <p>
      <img
        v-if="!newChar"
        :src="`https://game.soul-arena.app/uploads/${character.facepic}.jpg`"
      />
      <router-link :to="`/roster`">Go Back</router-link>
    </p>
    <FormulateForm @submit="submitHandler" class="form" v-model="mock">
      <div class="form-col">
        <div class="form-energyGain">
          <FormulateInput
            v-model.number="character.dexNumber"
            type="number"
            label="National pokedex number"
            validation="required"
          />
          <FormulateInput
            v-model="character.energyGain"
            type="checkbox"
            :options="reiatsuTypes"
            label="Can generate this type of energy"
            validation="required"
          />

          <FormulateInput
            type="checkbox"
            name="isFree"
            label="Is a starter character"
          />

          <FormulateInput
            type="number"
            name="Cost"
            v-model="character.cost"
            label="How many coins are needed to purchase this character"
          />
        </div>
        <Profile class="form-profile" :character="character"></Profile>
        <Types />
      </div>
      <FormulateInput class="btn" type="submit" label="Save" />
    </FormulateForm>
  </div>
</template>

<script>
import components from "./script/components";
import computed from "./script/computed";
import methods from "./script/methods";
import watchers from "./script/watchers";

export default {
  data() {
    return {
      character: null,
      mock: {},
    };
  },
  components,
  computed,
  methods,
  watchers,
  async created() {
    if (!this.newChar) {
      try {
        const id = this.$route.params.id;
        let char = await this.$axios.get(`/character/${id}`);
        this.character = Object.assign({}, this.character, {
          ...char.data.data,
          id: char.data.id,
          released: char.data.released || false,
          isFree: char.data.isfree || false,
        });
        this.mock = { ...this.character };
      } catch (err) {
        alert(err);
      }
    } else {
      this.character = { ...validatePics({}), released: false };
      this.mock = { ...this.character };
    }
  },
};

function validatePics(character) {
  if (character.facepic === undefined)
    character.facepic = generateRandomString("f__");
  if (character.banner === undefined)
    character.banner = generateRandomString("b__");
  if (character.skills === undefined) character.skills = [];
  for (let skill of character.skills) {
    if (skill.skillpic === undefined)
      skill.skillpic = generateRandomString("s__");
  }
  return character;
}

function generateRandomString(prefix) {
  return (
    prefix +
    Math.random()
      .toString(36)
      .replace(/[^a-z]+/g, "")
      .substr(0, 5)
  );
}
</script>

<style lang="scss">
@import "./style";
</style>