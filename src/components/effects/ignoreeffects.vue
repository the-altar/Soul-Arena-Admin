<template>
  <div v-if="char">
    <h1>Ignore effects</h1>
    <FormulateForm @submit="eventHandler">
      <div class="flex">
        <Base :data="effect" />
        <div>
          <FormulateInput
            v-model.number="effect.harmful"
            type="checkbox"
            label="Harmful Effects"
            help="If harmful effects should be ignored"
          />
          <FormulateInput
            v-model.number="effect.friendly"
            type="checkbox"
            label="Friendly Effects"
            help="If friendly effects should be ignored"
          />
          <FormulateInput
            v-model.number="effect.includeDamage"
            type="checkbox"
            label="Include Damage Effects"
            help="If left unchecked damage will not be ignored"
          />
        </div>
      </div>
      <FormulateInput class="btn" type="submit" label="Save changes" />
    </FormulateForm>
  </div>
</template>

<script>
import mixin from "./mixin";
import Base from "./base";

export default {
  components: {
    Base,
  },
  mixins: [mixin],
  methods: {},
  computed: {},
  watchers: {},
};
</script>


<style lang="scss">
</style>