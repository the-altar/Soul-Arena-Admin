<template>
  <div v-if='char'>
    <h1>Energy Removal</h1>

    <FormulateForm class='flex-col' @submit='eventHandler'>
      <div class='flex'>
        <Base :data='effect'/>
        <div>
          <FormulateInput
            type='number'
            label='How many energies'
            v-model.number='effect.value'
            help='how many energies should be removed'
          />

          <FormulateInput
            type='select'
            :options='reiatsuTypes'
            label='Which energy should be removed'
            v-model.number='effect.energyType'
          />
        </div>
      </div>
      <FormulateInput class='btn' type='submit' label='Save changes' />
    </FormulateForm>
  </div>
</template>

<script>
import mixin from "./mixin";
import Base from "./base"
export default {
  components:{
    Base
  },
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