<template>
  <div>
    <h1>Increase Healing Effect</h1>
    <FormulateForm class="container" @submit="eventHandler">
      <section class="flex">
        <BaseEffect :data="effect" />

        <div>
          <div>
            <button @click.prevent="param = 1">Skill Type</button>
            <button @click.prevent="param = 2">Specific Skill</button>
          </div>
          <FormulateInput
            v-if="param === 1"
            v-model.number="effect.skillType"
            type="select"
            :options="skillTypes"
            label="Skill Type"
            help="Which type should be affected by this"
          />

          <FormulateInput
            v-if="param === 2"
            v-model.number="effect.specificSkill"
            type="number"
            label="Specific skill id"
            help="If this effect is meant to target a specific skill"
          />
        </div>
      </section>
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
  data() {
    return {
      param: 1,
    };
  },
};
</script>


<style>
</style>