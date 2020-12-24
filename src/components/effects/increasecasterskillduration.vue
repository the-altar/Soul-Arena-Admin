<template>
  <div>
    <h1>Increase duration of skill used</h1>
    <FormulateForm class="container" @submit="eventHandler">
      <section class="flex">
        <BaseEffect :data="effect" />
        <div>
          <FormulateInput
            type="number"
            v-model.number="effect.targetSkillId"
            label="ID of the parent skill"
            help="This is for identifying effects properly"
          />
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
        console.log("ADD")
      if (!this.effect.effectsId) {
        this.$set(this.effect, "effectsId", []);
      }
      this.effect.effectsId.push(0)
    },
  },
};
</script>


<style>
</style>