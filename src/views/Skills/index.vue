<template>
  <div v-if="skills" class="skills">
    <div class="skills-list">
      <div class="skill" v-for="(skill, key) in skills" :key="key">
        <div>
          <img
            @click="$router.push(`/skills/${skill.id}`)"
            :src="`http://game.lvh.me:8080/uploads/${skill.data.skillpic}.jpg`"
            :alt="`${skill.data.name} picture`"
          />
        </div>
        <p class="skill-id">id: {{ skill.id }}</p>
      </div>
    </div>

    <button @click="$router.push('/skills/new')">Create a new skill</button>
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
      skills: null,
    };
  },
  components,
  computed,
  methods,
  watchers,
  async created() {
    try {
      const skills = await this.$axios.get(`/skill`);
      this.skills = skills.data;
    } catch (err) {
      alert(err);
    }
  },
};
</script>

<style lang="scss" scoped>
@import "./style";
</style>