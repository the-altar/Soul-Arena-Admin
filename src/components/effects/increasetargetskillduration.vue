<template>
  <div>
    <h1>Increase duration of skill used on target</h1>
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

          <div>
            <p>Except:</p>
            <button @click="addEffect">Add effect exception</button>
            <div v-if="effect.effectsId" class="flex">
              <div v-for="(e, key) in effect.effectsId" :key="key">
                <FormulateInput
                  type="number"
                  v-model.number="effect.effectsId[0]"
                  help="An effect with this id won't be affected"
                />

                <button @click="effect.effectsId.splice(key, 1)">delete</button>
              </div>
            </div>
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