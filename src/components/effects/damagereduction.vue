<template>
  <div v-if="char">
    <h1>{{ title || "Damage Reduction" }}</h1>
    <FormulateForm class="container" @submit="eventHandler">
      <div class="flex">
        <div>
          <General :data="effect"></General>
        </div>
        <div>
          <FormulateInput
            v-model.number="effect.value"
            type="number"
            label="Value"
            help="Quantitative value for effect"
          />

          <div>
            <button @click.prevent="param=1">Damage type</button>
            <button @click.prevent="param=2">Skill Type</button>
            <button @click.prevent="param=3">Specific Skill</button>
          </div>
          <FormulateInput
            v-if="param === 1"
            v-model.number="effect.damageType"
            type="select"
            :options="damageTypes"
            label="Damage type"
            help="Which damage type should be affected"
          />

          <FormulateInput
            v-if="param === 2"
            v-model.number="effect.skillType"
            type="select"
            :options="skillTypes"
            label="Skill Type"
            help="Which type should be affected by this"
          />

          <FormulateInput
            v-if="param === 3"
            v-model.number="effect.specificSkill"
            type="number"
            label="Specific skill id"
            help="If this effect is meant to target a specific skill"
          />
        </div>
      </div>
      <FormulateInput class="btn" type="submit" label="Save changes" />
    </FormulateForm>
  </div>
</template>

<script>
import General from "./base";
import mixin from "./mixin";
export default {
  props: ["title"],
  components: { General },
  mixins: [mixin],
  data() {
    return {
      param: 1,
    };
  },
};
</script>


<style lang="scss" scoped>
.damage {
  display: flex;

  &-side {
    margin: 1rem;
  }
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>