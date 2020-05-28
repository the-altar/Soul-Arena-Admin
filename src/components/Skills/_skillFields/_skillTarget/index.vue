<template>
  <section class="target">
    <h1>TARGET</h1>
    <section class="target__targets">
      <div
        v-for="(target, key) in targets"
        :key='key'
      >
        <input
          type="radio"
          name='target'
          v-model.number="$store.state.character.skills[index].target"
          :value="key"
          :id="target"
        >
        <label :for="target">{{target}}</label>
      </div>
    </section>

  </section>
</template>

<script>
export default {
  props: ["index"],
  data() {
    return {
      targets: [
        "One Enemy",
        "All Enemies",
        "Self",
        "One Ally",
        "One Ally Except Self",
        "All Allies Except Self",
        "All Characters",
        "All Characters Except Self"
      ]
    };
  },
  methods:{
    saveReqs(value){
      this.$store.state.character.skills[this.index].target.reqs = value
    }
  }
};
</script>

<style lang="postcss">
h1 {
  text-align: center;
}

.target {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.target__targets {
  height: 7.5rem;
  display: flex;
  justify-content: space-between;
  align-content: center;
  flex-wrap: wrap;
}

.small {
  width: 7rem;
}
</style>