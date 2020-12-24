<template>
  <div>
    <h1>Skill Cost Change</h1>
    <FormulateForm class="container" @submit="eventHandler">
      <div class="flex">
        <BaseEffect :data="effect" />
        <div>
          <FormulateInput
            v-model.number="effect.value"
            type="number"
            label="Value"
            help="Numerical value for how much energy should increased/decreased"
          />
          <FormulateInput
            v-model.number="effect.specificSkillTarget"
            type="select"
            :options="skillIdList"
            label="Skill"
            help="Select here if only a specific skill should be targeted or not"
          />
          <FormulateInput
            v-model.number="effect.reiatsuCostType"
            label="Reiatsu"
            type="select"
            help="Which type should be altered"
            :options="reiatsuTypes"
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
  async created() {
    try {
      const a = await this.$axios.get("/skill/ids");
      const mapped = {};
      a.data.forEach((e) => {
        mapped[e.id] = e.name;
      });
      mapped[0] = "Unspecified";
      this.skillIdList = mapped;
      console.log(mapped);
    } catch (err) {
      alert(err);
    }
  },
};
</script>


<style>
</style>