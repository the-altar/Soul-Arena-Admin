<template>
  <div v-if="char">
    <h1>Counter</h1>
    <FormulateForm class="container" @submit="eventHandler">
      <div class="flex">
        <div>
          <FormulateInput
            type="select"
            :options="skillTypes"
            v-model.number="effect.counterType"
            label="Should counter a specific skill type"
            help="Example: Reiatsu, Physical, etc..."
          />
          <FormulateInput
            type="select"
            :options="effectTypes"
            v-model.number="effect.effectTypes"
            label="Shoudl counter specific effect"
            help="Example: Stun, Healing, Damage, etc..."
          />
          <FormulateInput
            type="checkbox"
            v-model.number="effect.isDefensive"
            label="Is defensive?"
            help="defensive counters target skills used on the target, not by it"
          />

          <FormulateInput
            type="number"
            :options="skillTypes"
            v-model.number="effect.value"
            label="Countered skill limit"
            help="the max amount of times this effect can be triggered"
          />
        </div>
        <BaseEffect :data="effect" />
      </div>

      <FormulateInput class="btn" type="submit" label="Save changes" />
    </FormulateForm>
  </div>
</template>

<script>
import mixin from "./mixin";
import BaseEffect from "./base";
export default {
  components: { BaseEffect },
  mixins: [mixin],
  methods: {
    addEffect() {
      if (!this.effect.triggerOnCounter) {
        this.$set(this.effect, "triggerOnCounter", []);
      }
      this.effect.triggerOnCounter.push({ id: null, self: false });
    },
  },
};
</script>


<style scoped lang='scss'>
.triggerOnCounter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 300px;

  button {
    width: 20px;
  }
}

.margin {
  margin: 0 15px 0 15px;
}
</style>


