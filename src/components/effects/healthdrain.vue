<template>
  <div v-if='char'>
    <h1>Health Drain</h1>

    <FormulateForm class='flex-col' @submit='eventHandler'>
      <div class="flex">
        <div>
          <FormulateInput
            type='number'
            label='Value'
            v-model.number='effect.value'
            help='How much health should be drained'
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
        </div>
      </div>

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