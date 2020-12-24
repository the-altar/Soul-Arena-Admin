<template>
  <div v-if="char">
    <h1>Stun</h1>
    <FormulateForm @submit="eventHandler">
      <div class="flex">
        <Base :data="effect" />
        <div>
          <FormulateInput
            v-model.number="effect.stunClass"
            type="select"
            :options="skillTypes"
            label="Specific stun target"
            help="Choose which type to stun"
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