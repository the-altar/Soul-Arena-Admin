<template>
  <div>
    <h1>Replace Skill Cost</h1>
    <FormulateForm class="container" @submit="eventHandler">
      <div class="flex">
        <BaseEffect :data="effect" />
        <div>
          <button v-if="!effect.reiatsuReplacement" @click="generate()">
            Generate
          </button>
          <div v-else class="flex">
            <input
              class="cost-input"
              v-for="(e, key) in effect.reiatsuReplacement"
              :key="key"
              v-model.number="effect.reiatsuReplacement[key]"
              type="number"
            />
          </div>
          <FormulateInput
            v-model.number="effect.specificSkillTarget"
            type="select"
            :options="skillIdList"
            label="Skill"
            help="Select here if only a specific skill should be targeted or not"
          />
        </div>
      </div>
      <FormulateInput class="btn" type="submit" label="Save changes" />
    </FormulateForm>
  </div>
</template>

<script>
import mixin from "./mixin";
import BaseEffect from "./base";
export default {
  components: { BaseEffect },
  mixins: [mixin],
  data() {
    return {
      skillIdList: {},
    };
  },
  methods: {
    generate() {
      this.$set(this.effect, "reiatsuReplacement", [0, 0, 0, 0, 0]);
    },
  },
  async created() {
    try {
      const a = await this.$axios.get("/skill/ids");
      const mapped = {};
      a.data.forEach((e) => {
        mapped[e.id] = e.name;
      });
      mapped[0] = "Unspecified";
      this.skillIdList = mapped;
    } catch (err) {
      alert(err);
    }
  },
};
</script>


<style>
.cost-input {
  width: 35px;
  height: 15px;
  margin: 2px;
}
</style>