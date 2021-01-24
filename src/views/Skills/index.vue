<template>
  <div v-if="skills" class="skills">
    <div>
      <label>filter by id</label>
      <input type="text" @input="findSkillById" v-model.number="idFilter" />
      <button @click="resetSearch">reset</button>
    </div>

    <div class="skills-list">
      <div class="skill" v-for="(skill, key) in filtered" :key="key">
        <div>
          <img
            @click="$router.push(`/skills/${skill.id}`)"
            :src="`https://game.soul-arena.app/uploads/${skill.data.skillpic}.jpg`"
            :alt="`${skill.data.name} picture`"
            :title="skill.data.name"
          />
        </div>
        <p class="skill-id">id: {{ skill.id }}</p>
      </div>
    </div>

    <button @click="$router.push('/skills/new')">Create a new skill</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      idFilter: "",
      filtered: [],
      skills: [],
    };
  },
  methods: {
    findSkillById() {
      this.filtered = [];
      for (const skill of this.skills) {
        if (skill.id === this.idFilter) {
          this.filtered.push(skill);
          return;
        }
      }
    },
    resetSearch() {
      this.filtered = this.skills.slice();
      this.idFilter = "";
    },
  },
  async created() {
    try {
      const skills = await this.$axios.get(`/skill`);
      this.skills = skills.data;
      this.filtered = this.skills.slice();
    } catch (err) {
      alert(err);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./style";
</style>