<template>
  <div v-if="skill" class="flex flex-col">
    <h5>This skill cannot be used on targets of</h5>
    <button @click.prevent="cannotBeUsedOnTargetOf.push(0)">Add skill id</button>
    <div class="flex flex-col">
      <div
        class="flex"
        v-for="(index, key) in cannotBeUsedOnTargetOf"
        :key="key"
      >
        <FormulateInput
          v-model.number="cannotBeUsedOnTargetOf[key]"
          type="number"
          label="skill id"
          help="Target must not be affected by this skill"
        />
        <button @click.prevent="cannotBeUsedOnTargetOf.splice(key, 1)">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["skill"],
  computed: {
    cannotBeUsedOnTargetOf() {
      return this.skill.cannotBeUsedOnTargetOf;
    },
  },
};
</script>

<style>
</style>