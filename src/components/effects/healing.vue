<template>
  <div v-if='char'>
    <h1>Healing</h1>
    <FormulateForm class='container' @submit='eventHandler'>
      <section class='damage'>
        <div class='damage-side'>
          <FormulateInput
            v-model.number='effect.value'
            type='number'
            label='Healing value'
            help='how much health should be healed'
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
        </div>

        <div class='damage-side'>
          <FormulateInput
            label='Trigger clause'
            v-model.number='effect.triggerClause'
            type='select'
            :options='triggerTypes'
            help='This setting defines how this effect may interact with other mechanics'
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
        </div>
      </section>
      <FormulateInput
        type='checkbox'
        v-model='effect.compulsory'
        label='Is compulsory'
        help='Compulsory effects will trigger regardless of tick value if requirements are met'
      />
      <FormulateInput class='btn' type='submit' label='Save changes' />
    </FormulateForm>
  </div>
</template>

<script>
import mixin from "./mixin";
export default {
  mixins: [mixin],
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