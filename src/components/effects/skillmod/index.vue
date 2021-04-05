<template>
  <div>
    <h1>Skill Modifier</h1>
    <FormulateForm class="container flex flex-col" @submit="eventHandler">
      <section id="base" class="flex flex-col">
        <BaseEffect :data="effect" />
        <a href="#" v-scroll-to="'#specific'">Effect specific fields</a>
      </section>

      <div id="specific" class="flex flex-col">
        <SkillBody
          v-if="effect.metadata"
          :data="meta"
          :asComponent="true"
          @done="updateMetadata"
        ></SkillBody>
        <FormulateInput
          v-model="effect.skillId"
          class="btn"
          type="number"
          label="Skill Id"
          help="ID of the skill being modified"
        />
      </div>
      <FormulateInput class="btn" type="submit" label="Save changes" />
    </FormulateForm>
  </div>
</template>

<script>
import mixin from "../mixin";
import BaseEffect from "../base";
import SkillBody from "@/views/Skill/skill.body.vue";
export default {
  components: { BaseEffect, SkillBody },
  data() {
    return {
      meta: {
        cost: [0, 0, 0, 0, 0],
        requiresSkillOnTarget: [],
        cannotBeUsedOnTargetOf: [],
      },
    };
  },
  mixins: [mixin],
  methods: {
    updateMetadata(payload) {
      const cost_val = payload.cost.reduce((v, i) => v + i);
      this.$set(this.effect, "metadata", payload);
      if(!cost_val){
        this.effect.metadata.cost = null
      }
      // eslint-disable-next-line no-console
      console.log(this.effect.metadata);
    },
  },
  watch: {
    effect(n) {
      if (n.metadata) {
        this.meta = {
          ...n.metadata,
          cost: n.metadata.cost ? n.metadata.cost : [0, 0, 0, 0, 0],
        };
      } else {
        this.$set(this.effect, "metadata", {
          cost: [0, 0, 0, 0, 0],
          requiresSkillOnTarget: [],
          cannotBeUsedOnTargetOf: [],
        });
      }
    },
  },
};
</script>

<style lang="scss">
</style>
