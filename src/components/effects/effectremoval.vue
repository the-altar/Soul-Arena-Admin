<template>
  <div v-if="char">
    <h1>Effect Removal</h1>

    <FormulateForm @submit="eventHandler">
      <div class="flex">
        <BaseEffect :data="effect"></BaseEffect>
        <div>
          <FormulateInput
            type="select"
            :options="effectTypes"
            v-model.number="effect.specificEffect"
            label="Specific effect type"
            help="interact with certain type only"
          />
          <FormulateInput
            type="select"
            :options="skillIdList"
            v-model.number="effect.specificSkillId"
            label="Specific skill type"
            help="interact with a specific skill only"
          />
          <FormulateInput
            type="checkbox"
            label="Harmful effects"
            v-model="effect.harmful"
            help="remove harmful effects only"
          />
          <FormulateInput
            type="checkbox"
            label="Friendly effects"
            v-model="effect.friendly"
            help="remove helpful effects only"
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
  data() {
    return {
      skillIdList: {},
    };
  },
  components: { BaseEffect },
  mixins: [mixin],
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