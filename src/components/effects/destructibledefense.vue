<template>
  <div v-if='char'>
    <h1>Destructible Defense</h1>
    <FormulateForm class='container' @submit='eventHandler'>
      <section class='damage'>
        <div class='damage-side'>
          <FormulateInput
            v-model.number='effect.value'
            type='number'
            label='Destructible defense'
            help='how much destructible defense is granted'
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