<template>
  <div v-if='char'>
    <h1>Energy Gain</h1>

    <FormulateForm class='flex-col' @submit='eventHandler'>
      <div class='flex'>
        <div>
          <FormulateInput
            type='number'
            label='How many energies'
            v-model.number='effect.value'
            help='how many energies to grant'
          />

          <FormulateInput
            type='select'
            :options='costTypes'
            label='Which energy type to gain'
            help='Defines which energy the player will gain'
            v-model.number='effect.energyType'
          />

          <FormulateInput
            v-model.number='effect.duration'
            type='number'
            label='Effect Duration'
            placeholder='type damage here'
            help='Odd numbers end on your turn, even on your enemys'
          />
        </div>

        <div>
          <FormulateInput
            v-model.number='effect.delay'
            type='number'
            label='Effect Delay'
            placeholder='type damage here'
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

          <FormulateInput
            label='Trigger clause'
            v-model.number='effect.triggerClause'
            type='select'
            :options='triggerTypes'
            help='This setting defines how this effect may interact with other mechanics'
          />
        </div>
      </div>
      <FormulateInput
        type='checkbox'
        v-model='effect.compulsory'
        label='Is compulsory'
        help='Compulsory effects will trigger regardless of tick value if requirements are met'
      />
      <FormulateInput class='btn' type='submit' label='Save changes' />
    </FormulateForm>
    <p>{{effect}}</p>
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


<style lang="scss" scoped>
.flex {
  display: flex;
  div {
    margin: 0.5rem;
  }

  &-col {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>