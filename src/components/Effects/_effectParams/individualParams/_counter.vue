<script>
export default {
  props: ["sIndex", "eIndex", "eType"],
  data() {
    return {
      effects: ["damage", "invulnerability", "counter", "any"]
    };
  }
};
</script>


<template>
  <div>
    <h1 class="effect__header">{{eType}}</h1>
    <p>Counter what?</p>
    <div>
      <p
        v-for="(value, key) in effects"
        :key="key"
      >
        {{value}}
        <input
          type="checkbox"
          :value="value"
          v-model="$store.state.character.skills[sIndex].effects[eIndex].categories"
        >
      </p>
    </div>
    <p>
      Counter skills: <select>
        <option value="usedOn">Used on target</option>
        <option value="usedBy">Used by target</option>
      </select>
    </p>
  </div>
</template>