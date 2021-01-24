<template>
  <div>
    <h1>Enable Effects</h1>
    <FormulateForm class="container" @submit="eventHandler">
      <section class="flex">
        <BaseEffect :data="effect" />
        <div>
          <FormulateInput
            type="number"
            v-model.number="effect.parentSkillId"
            label="ID of the parent skill"
            help="This is for identifying effects properly"
          />
          <div>
            <button @click="addEffect()">Add Effect</button>
            <FormulateInput
              v-for="(d, key) in effect.effectsId"
              :key="key"
              v-model.number="effect.effectsId[key]"
              label="Effect id"
              help="target specific effect"
            />
          </div>
        </div>
      </section>
      <FormulateInput class="btn" type="submit" label="Save changes" />
    </FormulateForm>
    {{ effect }}
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
      if (!this.effect.effectsId) {
        this.$set(this.effect, "effectsId", []);
      }
      this.effect.effectsId.push(0);
    },
  },
};
</script>


<style>
</style>