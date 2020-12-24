<template>
  <div v-if='char'>
    <h1>Damage</h1>
    <FormulateForm class='container' @submit='eventHandler'>
      <section class='damage'>
        <div class='damage-side'>
          <FormulateInput
            v-model.number='effect.value'
            type='number'
            label='Damage value'
            placeholder='type damage here'
            help='how much damage should be dealt'
          />
          <FormulateInput
            v-model.number='effect.damageType'
            type='select'
            :options='damageTypes'
            label='Damage type'
            help='This setting defines how this effect may interact with other mechanics'
          />
          <FormulateInput
            type='number'
            v-model.number='effect.increment'
            label='Value increment'
            help='How much the value should be increased each turn'
          />

          <FormulateInput
            abel
            type='checkbox'
            v-model='effect.isMultiplier'
            label='Is multiplier'
            help='if increment is multiplier or additive'
          />
        </div>
        <BaseEffect :data='effect' />
      </section>

      <FormulateInput class='btn' type='submit' label='Save changes' />
    </FormulateForm>
  </div>
</template>

<script>
import mixin from "./mixin";
import BaseEffect from "./base";
export default {
  components: { BaseEffect },
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