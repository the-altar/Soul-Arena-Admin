<template>
  <div>
    <FormulateInput
      type="text"
      placeholder="Type it here"
      label="License title"
      required='true'
      name="title"
      v-model="license.name"
    />

    <FormulateInput
      type="text"
      placeholder="Type it here"
      label="License description"
      required='true'
      v-model="license.description"
    />

    <FormulateInput
      type="select"
      v-model.number="license.unlocked_entity"
      label="Assign entity"
      :options="charIds"
      name="entity_id"
      required='true'
    />

    <FormulateInput
      type="number"
      label="Required level"
      required='true'
      v-model.number="license.level_requirement"
    />

    <FormulateInput
      type="number"
      required='true'
      placeholder="How much does it cost?"
      label="Coins"
      name="coins"
      v-model.number="license.cost"
    />

    <FormulateInput
      type="checkbox"
      label="Is mission public?"
      v-model.number="license.released"
    />


  </div>
</template>

<script>
export default {
    props:['license', 'charIds']
};
</script>

<style>
</style>