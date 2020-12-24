<template>
  <div>

    <FormulateInput
      type="text"
      placeholder="Type it here"
      label="Goal description"
      required='true'
      name="title"
      v-model="goal.description"
    />

    <FormulateInput
      type="number"
      v-model.number="g.battlesWon"
      label="How many battles should be won"
    />

    <FormulateInput
      type="checkbox"
      label="In a row"
      v-model="goal.inRow"
    />
    
    <FormulateInput
      type="select"
      v-model.number="goal.against"
      label="vs Character"
      :options="charIds"
    />

    <FormulateInput
      type="select"
      v-model.number="goal.with"
      label="with Character"
      :options="charIds"
    />
  </div>
</template>

<script>
export default {
    props:['goal', 'charIds'],
    computed:{
      g(){
        return this.goal
      }
    },
    created(){
      this.$set(this.charIds, -1, "None")
    }
};
</script>

<style>
</style>