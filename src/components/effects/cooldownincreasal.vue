<template>
  <div v-if='char'>
    <h1>Cooldown Increasal</h1>
    <FormulateForm @submit='eventHandler'>
      <FormulateInput
        v-model.number='effect.value'
        type='number'
        label='Cooldown increase'
        help='How many turns to increase'
      />

      <FormulateInput
        v-model.number='effect.duration'
        type='number'
        label='Effect Duration'
        help='Odd numbers end on your turn, even on your enemys'
      />
      <FormulateInput
        v-model.number='effect.delay'
        type='number'
        label='Effect Delay'
        help='How long this effect should wait before activating'
      />

      <FormulateInput
        v-model.number='effect.activationType'
        type='select'
        :options='activationTypes'
        label='Activation order'
        help='When this effect can be activated'
      />

      <FormulateInput
        v-model.number='effect.behavior'
        type='select'
        :options='behaviorTypes'
        label='Effect behavior'
        help='How this effect should behave with the targets'
      />

      <FormulateInput class='btn' type='submit' label='Save changes' />
    </FormulateForm>
  </div>
</template>

<script>
import mixin from "./mixin";
export default {
  mixins: [mixin],
  data() {
    return {};
  },
  methods: {},
  computed: {},
  watchers: {},
};
</script>


<style lang="scss">
</style>