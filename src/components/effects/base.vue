<template>
  <div class="flex flex-top">
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
          v-if="!effect.infinite"
          v-model.number="effect.increaseDurationByAlliesAlive"
          type="checkbox"
          label="Increase duration by live Ally"
          help="Duration of this effect will be extended for every ally still alive"
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
          v-model.number="effect.stackLimit"
          type="number"
          label="Limit"
          help="How many times this effect may stack. 0 means indefinitely and is the default value"
          placeholder="0"
        />

        <FormulateInput
          v-model.number="effect.priority"
          type="number"
          label="Priority"
          help="Order in which each effect is activated, from highest to lowest"
          placeholder="0"
        />
      </div>
    </div>

    <div>
      <FormulateInput
        type="text"
        v-model.number="effect.message"
        label="Effect tooltip"
        help="This message will be displayed once the effect has been cast!"
      />

      <FormulateInput
        type="number"
        v-model.number="effect.tick"
        label="Initial Tick Value"
        help="If an odd value is set the effect will be applied in reverse, 0 is the default"
        placeholder="0"
      />

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
        v-model="effect.ignoresInvulnerability"
        label="Ignores invulnerability"
        help="Will ignore invulnerabily effects when applied"
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

    <div>
      <h4>Link effect</h4>
      <div>
        <button @click.prevent="addEffect()">Add Effect</button>
        <div v-for="(d, key) in effect.triggerLinkedEffects" :key="key">
          <FormulateInput
            :key="key"
            type="select"
            v-model.number="effect.triggerLinkedEffects[key].condition"
            label="Condition"
            help="Will be linked (applied) when this condition is met"
            :options="triggerTypes"
          />
          <FormulateInput
            :key="key"
            type="number"
            v-model.number="effect.triggerLinkedEffects[key].id"
            label="Effect id"
            help="target specific effect"
          />
          <div>
            <FormulateInput
              type="checkbox"
              v-model="effect.triggerLinkedEffects[key].self"
              label="Target self"
              help="If selected this effect will be applied on the caster, rather than target"
            />
            <FormulateInput
              type="checkbox"
              v-model="effect.triggerLinkedEffects[key].victim"
              label="Target countered character"
              help="If selected this effect will be applied on whomever was countered"
            />
            <FormulateInput
              type="checkbox"
              v-model="effect.triggerLinkedEffects[key].target"
              label="Target"
              help="Link will be applied on whomever was the original target"
            />
          </div>
          <button @click.prevent="effect.triggerLinkedEffects.splice(key, 1)">
            x
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data", "skillid"],
  methods: {
    addEffect() {
      if (!this.effect.triggerLinkedEffects) {
        this.$set(this.effect, "triggerLinkedEffects", []);
      }
      this.effect.triggerLinkedEffects.push({ id: null, self: false });
    },
  },
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