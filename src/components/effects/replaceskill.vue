<template>
  <div>
    <h1>Replace Skill Completely</h1>
    <FormulateForm class="container" @submit="eventHandler">
      <section class="flex">
        <BaseEffect :data="effect" />
        <div v-if="skillIdList">
          <FormulateInput
            type="select"
            v-model.number="effect.targetSkillId"
            :options="skillIdList"
            label="Targeted Skill Id"
            help="Id of the skill to be replaced"
          />

          <FormulateInput
            type="select"
            v-model.number="effect.originSkillId"
            :options="skillIdList"
            label="Replacement Skill Id"
            help="Id of the skill to be replaced by"
          />
        </div>
      </section>
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
      skillIdList: null,
    };
  },
  async created() {
    try {
      const a = await this.$axios.get("/skill/ids");
      const mapped = {};
      a.data.forEach((e) => {
        mapped[e.id] = e.name;
      });
      this.skillIdList = mapped;
    } catch (err) {
      alert(err);
    }
  },
};
</script>


<style>
</style>