<template>
  <div v-if="skill" class="flex flex-col">
    <h5>Require one of these on target</h5>
    <button @click.prevent="requiresSkillOnTarget.push(0)">Add skill id</button>
    <div class="flex flex-col">
      <div
        class="flex"
        v-for="(index, key) in requiresSkillOnTarget"
        :key="key"
      >
        <FormulateInput
          v-model.number="requiresSkillOnTarget[key]"
          type="number"
          label="skill id"
          help="Target must be affected by this skill"
        />
        <button @click.prevent="requiresSkillOnTarget.splice(key, 1)">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["skill"],
  computed: {
    requiresSkillOnTarget() {
      return this.skill.requiresSkillOnTarget;
    },
  },
};
</script>

<style>
</style>