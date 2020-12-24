<template>
  <div v-if="char">
    <h1>Cooldown Reduction</h1>
    <FormulateForm @submit="eventHandler">
      <div class="flex">
        <div>
          <BaseEffect :data="effect" />
        </div>
        <div>
          <FormulateInput
            type="number"
            v-model.number="effect.value"
            help="how much cooldown should be reduced"
            label="value"
          />
          <div>
            <button @click="tab1 = 1">All skills</button>
            <button @click="tab1 = 0">Skill ID</button>
          </div>
          <FormulateInput
            v-if="tab1 === 0"
            v-model.number="effect.ofSkillId"
            type="number"
            label="Specific skill id"
            help="This effect will only target skills with this ID"
          />
          <FormulateInput
            v-else-if="tab1 === 1"
            v-model="effect.ofAllSkills"
            type="checkbox"
            label="Affect all skills"
            help="Whole skillset will be affected"
          />
        </div>
      </div>
      <FormulateInput class="btn" type="submit" label="Save changes" />
    </FormulateForm>
  </div>
</template>


<script>
import m from "./mixin";
import BaseEffect from "./base";
export default {
  mixins: [m],
  components: { BaseEffect },
  data() {
    return {
      tab1: 0,
    };
  },
};
</script>

<style lang="scss"></style>;
