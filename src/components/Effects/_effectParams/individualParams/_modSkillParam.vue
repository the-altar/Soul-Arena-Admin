<template>
  <div>
    <h1 class='effect__header'>{{eType}}</h1>
    <div>

      <select>
        <option v-for="(parameter, key) in effects" :key="key" :value="key">{{parameter}}</option>
      </select>  

      <select @change='modTarget' v-model='select'>
        <option :value='"Specific"'>Specific Skill</option>
        <option :value='"Any"'>Any</option>
      </select>

      <select v-if='select !== "Any"' v-model='params.SpecificTargetId'>
        <option v-for='(skill, key) in skillIds' :value='skill.id' :key='key'>{{skill.name}}</option>
      </select>

      <input type='number' placeholder='value' v-model.number='params.value' />
    </div>
  </div>
</template>

<script>
export default {
  props: ["sIndex", "eIndex", "eType"],
  data() {
    return {
      select: "",
      effects: [
        "baseCooldown",
        "startCooldown",
        "cost",
        "disabled"
      ]
    };
  },
  computed: {
    params() {
      return this.$store.state.character.skills[this.sIndex].effects[
        this.eIndex
      ];
    },
    skillIds() {
      return this.$store.state.character.skills.map(e => {
        return { id: e.id, name: e.name };
      });
    }
  },
  methods: {
    modTarget(e) {
      if (e.target.value === "Specific") {
        this.params.modType.Specific = true;
        this.params.modType.Any = false;
      } else {
        this.params.modType.Specific = false;
        this.params.modType.Any = true;
      }
    }
  },
  created() {
    if (this.params.modType === undefined) this.params.modType = {};
    else {
      if (this.params.modType.Specific) this.select = "Specific";
      else this.select = "Any";
    }
  }
};
</script>
