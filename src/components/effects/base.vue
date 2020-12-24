<template>
  <div class="flex">
    <div>

      <FormulateInput
        type="number"
        v-model.number="effect.value"
        label="Effect value"
        help="Can be left blank sometimes"
      />

      <FormulateInput
        type="checkbox"
        v-model="effect.infinite"
        label="Infinity"
        help="Check this field if this effect should last forever"
      />

      <FormulateInput
        v-if="!effect.infinite"
        v-model.number="effect.duration"
        type="number"
        label="Effect Duration"
        help="Odd numbers end on your turn, even on your enemys"
      />
      <FormulateInput
        v-model.number="effect.delay"
        type="number"
        label="Effect Delay"
        help="How long this effect should wait before activating"
      />
      <FormulateInput
        label="Trigger clause"
        v-model.number="effect.triggerClause"
        type="select"
        :options="triggerTypes"
        help="This setting defines how this effect may interact with other mechanics"
      />

      <FormulateInput
        v-model.number="effect.activationType"
        type="select"
        :options="activationTypes"
        label="Activation order"
        help="When this effect can be activated"
      />

      <FormulateInput
        v-model.number="effect.priority"
        type="number"
        label="Priority"
        help="Order in which each effect is activated, from highest to lowest. 0 by default"
        placeholder="0"
      />
    </div>

    <div>
      <FormulateInput
        v-model.number="effect.behavior"
        type="select"
        :options="behaviorTypes"
        label="Effect behavior"
        help="How this effect should behave with the targets"
      />

      <FormulateInput
        v-model.number="effect.triggerRate"
        type="number"
        label="Trigger Rate"
        help="Chances of this effect activating (-1 for completely inactive effects)"
        min="-1"
        max="100"
      />

      <FormulateInput
        type="checkbox"
        v-model="effect.isInvisible"
        label="Visibility"
        help="Whether a skill is visible to the enemy or not"
      />

      <FormulateInput
        type="checkbox"
        v-model="effect.compulsory"
        label="Is compulsory"
        help="Compulsory effects will trigger regardless of tick value if requirements are met"
      />

      <FormulateInput
        type="checkbox"
        v-model="effect.linked"
        label="Terminal"
        help="Once effect ends the whole skill should be finished"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["data", "skillid"],
  computed: {
    effect() {
      return this.data;
    },
    skillID() {
      return this.skillid;
    },
    activationTypes() {
      return this.$store.getters["enums/getEnum"]("activationTypings");
    },
    behaviorTypes() {
      return this.$store.getters["enums/getEnum"](
        "effectTargetBehaviorTypings"
      );
    },
    pokemonTypes() {
      return this.$store.getters["enums/getEnum"]("pokemonTypings");
    },
    damageTypes() {
      return this.$store.getters["enums/getEnum"]("damageTypings");
    },
    costTypes() {
      return this.$store.getters["enums/getEnum"]("costTypings");
    },
    targetModeTypes() {
      return this.$store.getters["enums/getEnum"]("targetModeTypings");
    },
    triggerTypes() {
      return this.$store.getters["enums/getEnum"]("triggerClauseTypings");
    },
    effectTypes() {
      return this.$store.getters["enums/getEnum"]("effectTypings");
    },
  },
};
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  margin-right: 5px;
}
</style>