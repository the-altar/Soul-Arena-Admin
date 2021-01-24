<template>
  <div>
    <!-- Text display -->
    <FormulateInput
      type="text"
      placeholder="Type it here"
      label="Goal description"
      required="true"
      name="title"
      v-model="goal.description"
    />
    <!--Number of battles-->
    <FormulateInput
      type="number"
      v-model.number="g.battlesWon"
      label="How many battles should be won"
    />
    <!--If they should be in a row-->
    <FormulateInput type="checkbox" label="In a row" v-model="goal.inRow" />

    <FormulateInput
      type="select"
      v-model.number="goal.against"
      label="vs Character"
      :options="charDexNumbers"
      help="set to None if no specific target"
    />

    <div>
      <FormulateInput
        type="select"
        v-model.number="goal.againstGroup"
        label="vs Group"
        help="set to None if no specific target"
        :options="charGroups"
      />
      <button @click.prevent="goal.againstGroup = undefined">reset</button>
    </div>

    <!--With character or group-->
    <FormulateInput
      type="select"
      v-model.number="goal.with"
      label="with Character"
      help="set to None if no specific target"
      :options="charDexNumbers"
    />

    <div>
      <FormulateInput
        type="select"
        v-model.number="goal.withGroup"
        label="with Group"
        help="set to None if no specific target"
        :options="charGroups"
      />
      <button @click.prevent="goal.withGroup = undefined">reset</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["goal", "charDexNumbers"],
  computed: {
    g() {
      return this.goal;
    },
    charGroups() {
      return this.$store.getters["enums/getEnum"]("characterTypings");
    },
  },
  created() {
    this.$set(this.charDexNumbers, -1, "None");
    this.$set(this.charGroups, -1, "None");
  },
};
</script>

<style>
</style>